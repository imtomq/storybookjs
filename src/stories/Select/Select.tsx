import { MenuItem, TextField as MuiTextField } from "@mui/material";
import { SelectProps } from "./Select.types";

export const Select = ({ options = [], ...props }: SelectProps) => (
  <MuiTextField select {...props}>
    {options?.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </MuiTextField>
);
