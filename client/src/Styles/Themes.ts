import { ThemeOptions, darken, lighten } from "@mui/material";
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
      _main: "#fafafa",
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
      get paper() {
        return "#FFFFFF";
        // return lighten(this.main, 0.02);
      },
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
        primary: {
          main: this.colors.primary,
          dark: darken(this.colors.primary, 0.5),
          light: lighten(this.colors.primary, 0.5),
          contrastText: this.colors.text.main,
        },

        secondary: {
          main: this.colors.secondary,
          dark: darken(this.colors.secondary, 0.5),
          light: lighten(this.colors.secondary, 0.5),
          contrastText: this.colors.text.main,
        },
      },
      typography: {
        fontSize: 16,
        fontFamily: "monospace",
        fontWeightBold: 800,
        fontWeightMedium: 600,
        fontWeightLight: 400,
        fontWeightRegular: 400,
        allVariants: { color: this.colors.text.main, alignSelf: "center" },
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
