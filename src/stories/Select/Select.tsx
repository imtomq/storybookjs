import { MenuItem, TextField as MuiTextField } from "@mui/material";
import { SelectProps } from "./Select.types";

export default function Select({ options = [], ...props }: SelectProps) {
  return (
    <MuiTextField select {...props}>
      {options.length > 0 &&
        options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </MuiTextField>
  );
}
