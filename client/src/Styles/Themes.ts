import { ThemeOptions } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createMixins";
import { autorun, makeAutoObservable } from "mobx";
export type StylesObject = { [key: string]: CSSProperties };
class Themes {
  private _theme: ThemeOptions | undefined = undefined;
  get theme() {
    return this._theme;
  }
  colors = {
    _primary: "#29374a",
    get primary() {
      return this._primary;
    },
    set primary(value: string) {
      this._primary = value;
    },
    _secondary: "#d2c17a",
    get secondary() {
      return this._secondary;
    },
    set secondary(value: string) {
      this._secondary = value;
    },
    text: {
      _main: "#d2c17a",
      get main() {
        return this._main;
      },
      set main(value: string) {
        this._main = value;
      },
    },
    background: {
      _main: "#29374a",
      get main() {
        return this._main;
      },
      set main(value: string) {
        this._main = value;
      },
      paper: "#364355",
    },
  };
  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      this.updateTheme();
    });
  }

  updateTheme() {
    const item: ThemeOptions = {
      palette: {
        background: { default: this.colors.background.main, paper: this.colors.background.paper },
        primary: { main: this.colors.primary },
        secondary: { main: this.colors.secondary },
      },
      typography: {
        fontSize: 16,
        fontFamily: "monospace",
        fontWeightBold: 800,
        fontWeightMedium: 600,
        fontWeightLight: 400,
        fontWeightRegular: 400,
        allVariants: { color: this.colors.text.main },
      },
    };
    this._theme = item;
  }
  private _paletteIsOpened = true;
  get isPaletteOpened() {
    return this._paletteIsOpened;
  }
  set isPaletteOpened(value: boolean) {
    this._paletteIsOpened = value;
  }
}
const themes = new Themes();
//@ts-ignore
window.themes = themes;

export { themes };
