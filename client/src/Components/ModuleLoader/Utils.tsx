import { Children, ReactNode } from "react";
import { makeAutoObservable } from "mobx";
type Orientation = "top" | "bottom" | "left" | "right";

type ModuleLinks = ReactNode;

interface Settings {
  links?: ReactNode;
  useRouter?: boolean;
  direction?: Orientation;
  opened?: boolean;
  sidebarWidth?: number;
}
export class ModuleObject {
  constructor(private _settings?: Settings) {
    makeAutoObservable(this);
  }
  defaults: Settings = {
    links: null,
    direction: "left",
    useRouter: false,
    opened: true,
    sidebarWidth: 300,
  };
  onClickMenu = () => {
    this.opened = !this.opened;
  };

  set links(value: Settings["links"]) {
    this.defaults.links = value;
  }
  get links() {
    return this._settings?.links ?? this.defaults.links;
  }
  set direction(value: Settings["direction"]) {
    this.defaults.direction = value;
  }
  get direction() {
    return this._settings?.direction ?? this.defaults.direction;
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

  get isSingleTab(): boolean {
    return Children.count(this.links) === 1;
  }
}
