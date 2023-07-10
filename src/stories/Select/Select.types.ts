import { TextFieldProps as MuiTextFieldProps } from "@mui/material";

type BaseTextFieldProps = Omit<MuiTextFieldProps, "">;

export interface SelectProps extends BaseTextFieldProps {
  options?: { label: string; value: any }[];
}
