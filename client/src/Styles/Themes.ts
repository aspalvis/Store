import { ThemeOptions } from "@mui/material";
import { autorun, makeAutoObservable, toJS } from "mobx";
class Themes {
  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      this.updateTheme();
    });
  }
  updateTheme() {
    const item: ThemeOptions = {
      palette: {
        background: { default: this._ColorBackground, paper: this._ColorBackgroundPaper },
        primary: { main: this._ColorPrimary },
        secondary: { main: this._ColorSecondary },
      },
      typography: {
        fontSize: 16,
        fontFamily: "monospace",
        fontWeightBold: 800,
        fontWeightMedium: 600,
        fontWeightLight: 400,
        fontWeightRegular: 400,
        allVariants: { color: this._ColorBackgroundPaper },
      },
    };
    this._theme = item;
  }
  private _paletteIsOpened = false;
  get isPaletteOpened() {
    return this._paletteIsOpened;
  }
  set isPaletteOpened(value: boolean) {
    this._paletteIsOpened = value;
  }

  private _ColorPrimary = "#002b6e";
  get ColorPrimary() {
    return this._ColorPrimary;
  }
  set ColorPrimary(value: string) {
    this._ColorPrimary = value;
  }

  private _ColorSecondary = "#b38b53";
  get ColorSecondary() {
    return this._ColorSecondary;
  }
  set ColorSecondary(value: string) {
    this._ColorSecondary = value;
  }

  private _ColorThird = "#b38b53";
  get ColorThird() {
    return this._ColorThird;
  }
  set ColorThird(value: string) {
    this._ColorThird = value;
  }
  private _ColorBackground = "#002b6e";
  get ColorBackground() {
    return this._ColorBackground;
  }
  set ColorBackground(value: string) {
    this._ColorBackground = value;
  }
  private _ColorBackgroundPaper = "#fefffe";
  get ColorBackgroundPaper() {
    return this._ColorBackgroundPaper;
  }
  set ColorBackgroundPaper(value: string) {
    this._ColorBackgroundPaper = value;
  }

  private _theme: ThemeOptions | undefined = undefined;
  get theme() {
    return this._theme;
  }
}
export default new Themes();
