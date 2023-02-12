import { Children, ReactNode } from "react";
import { Outlet } from "react-router-dom";
type Orientation = "top" | "bottom" | "left" | "right";
interface Settings {
  module: ReactNode;
  tabs: ReactNode;
  useRouter: boolean;
  modulePosition: Orientation;
}
export class ModuleLoaderObject {
  private _tabs;
  module;
  modulePosition;
  useRouter;

  defaults: Settings = {
    module: <Outlet />,
    tabs: null,
    modulePosition: "left",
    useRouter: false,
  };
  onMenuOpen = () => {};

  constructor(settings?: Settings) {
    if (settings) {
      this.module = settings.module;
      this._tabs = settings.tabs;
      this.modulePosition = settings.modulePosition;
      this.useRouter = settings.useRouter;
    } else {
      this.module = this.defaults.module;
      this._tabs = this.defaults.tabs;
      this.modulePosition = this.defaults.modulePosition;
      this.useRouter = this.defaults.useRouter;
    }
  }
  get tabs() {
    return this._tabs;
  }
  // navigationLinks: {
  //   id: string;
  //   title: string;
  //   desciption?: string;
  //   to?: string;
  //   icon?: string;
  //   onClick?: () => void;
  // }[] = [];
  get isSingleTab(): boolean {
    return Children.count(this._tabs) === 1;
  }
}
