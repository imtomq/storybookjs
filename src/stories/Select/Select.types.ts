import { TextFieldProps as MuiTextFieldProps } from "@mui/material";
import React from "react";

type BaseTextFieldProps = Omit<MuiTextFieldProps, "variant">;

export interface SelectProps extends BaseTextFieldProps {
  options?: { label: string; value: any }[];
}
