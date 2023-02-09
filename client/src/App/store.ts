import Themes from "../Styles/Themes";
class App {
  theme: typeof Themes;
  constructor() {
    this.theme = Themes;
  }
}
export const app = new App();
//@ts-ignore
window["app"] = app;
