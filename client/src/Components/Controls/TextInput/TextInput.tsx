import { TextFieldProps } from "@mui/material";
import { StyledTextInput } from "./Styles/StyledTextInput";
import { runInAction, toJS } from "mobx";
import { observer } from "mobx-react";

export interface IMutable<T> {
  item: T;
  propertyName: keyof T;
  onChange?: (item: T) => void;
}

interface TextInputProps<T> {
  onChange?: (value: string) => void;
  width?: string | number;
  mutable?: IMutable<T>;
}

const TextInput = <T,>(props: TextInputProps<T> & Omit<TextFieldProps, "onChange">) => {
  const { onChange, width, variant = "outlined", size = "small", mutable, ...restProps } = props;
  const handleChange = (event: any) => {
    if (mutable) {
      runInAction(() => {
        mutable.item[mutable.propertyName] = event.target.value;
        if (mutable.onChange) {
          mutable.onChange(toJS(mutable.item));
        }
      });
    }
    if (onChange) {
      runInAction(() => {
        onChange(event.target.value);
      });
    }
  };

  const cssWidth = width
    ? typeof width === "number"
      ? { width: width.toString() + "%" }
      : { width }
    : { width: "100%" };

  if (mutable) {
    return (
      <div style={{ ...cssWidth }}>
        <StyledTextInput
          value={mutable.item[mutable.propertyName]}
          fullWidth
          size={size}
          onChange={handleChange}
          variant={variant}
          {...restProps}
        />
      </div>
    );
  }

  return (
    <div style={{ ...cssWidth }}>
      <StyledTextInput fullWidth size={size} onChange={handleChange} variant={variant} {...restProps} />
    </div>
  );
};

export default observer(TextInput);
