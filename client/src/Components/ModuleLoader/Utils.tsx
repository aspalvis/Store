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
  defaults: Settings = {
    module: <Outlet />,
    tabs: null,
    modulePosition: "left",
    useRouter: false,
  };

  module;
  tabs;
  modulePosition;
  useRouter;

  constructor(settings?: Settings) {
    if (settings) {
      this.module = settings.module;
      this.tabs = settings.tabs;
      this.modulePosition = settings.modulePosition;
      this.useRouter = settings.useRouter;
    } else {
      this.module = this.defaults.module;
      this.tabs = this.defaults.tabs;
      this.modulePosition = this.defaults.modulePosition;
      this.useRouter = this.defaults.useRouter;
    }
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
    return Children.count(this.tabs) === 1;
  }
}
