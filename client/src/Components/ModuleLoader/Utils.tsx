import { Children, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { fillItem } from "../../Utils/ObjectMethods";
import { makeAutoObservable } from "mobx";
type Orientation = "top" | "bottom" | "left" | "right";
interface Settings {
  module: ReactNode;
  navItems: ReactNode;
  useRouter?: boolean;
  modulePosition?: Orientation;
  opened?: boolean;
  sidebarWidth?: number;
}
export class ModuleLoaderObject {
  // opened;
  // navItems;
  // module;
  // modulePosition;
  // useRouter;

  defaults: Settings = {
    module: <Outlet />,
    navItems: null,
    modulePosition: "left",
    useRouter: false,
    opened: true,
    sidebarWidth: 300,
  };
  onClickMenu = () => {
    this.opened = !this.opened;
  };

  set module(value: Settings["module"]) {
    this.defaults.module = value;
  }
  get module() {
    return this._settings?.module ?? this.defaults.module;
  }
  set navItems(value: Settings["navItems"]) {
    this.defaults.navItems = value;
  }
  get navItems() {
    return this._settings?.navItems ?? this.defaults.navItems;
  }
  set modulePosition(value: Settings["modulePosition"]) {
    this.defaults.modulePosition = value;
  }
  get modulePosition() {
    return this._settings?.modulePosition ?? this.defaults.modulePosition;
  }
  set useRouter(value: Settings["useRouter"]) {
    this.defaults.useRouter = value;
  }
  get useRouter() {
    return this._settings?.useRouter ?? this.defaults.useRouter;
  }
  set opened(value: Settings["opened"]) {
    this.defaults.opened = value;
  }
  get opened() {
    return this._settings?.opened ?? this.defaults.opened;
  }
  set sidebarWidth(value: Settings["sidebarWidth"]) {
    this.defaults.sidebarWidth = value;
  }
  get sidebarWidth() {
    if (!this.opened) {
      return 0;
    }
    return this._settings?.sidebarWidth ?? this.defaults.sidebarWidth;
  }

  constructor(private _settings?: Settings) {
    makeAutoObservable(this);
  }

  get isSingleTab(): boolean {
    return Children.count(this.navItems) === 1;
  }
}
