import { isValidElement, useEffect } from "react";
import { useField } from "formik";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  InputAdornment,
  SvgIconTypeMap,
  TextField,
} from "@mui/material";

import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

const CustomInput = ({  label, Icon, ...props }: Props) => {
  const [field, meta, helpers] = useField(props);
 
  return (
    <FormControl
      fullWidth
      variant="outlined"
      error={Boolean(meta.error) && meta.touched}
    >
      <FormLabel focused sx={{ fontSize: "18px", fontWeight: "900" , fontFamily : 'relaway sans-serif'}}>
        {label}
      </FormLabel>
      <TextField
        error={Boolean(meta.error) && meta.touched}
        {...props}
        {...field}
        InputProps={{
          sx: {
            backgroundColor: "rgb(0, 0, 0 , .8)",
            color: "white",
            borderRadius: "10px",
          },
          startAdornment: (
            <InputAdornment position="start">
              {Icon ? <Icon sx={{ color: Boolean(meta.error) && meta.touched ? "red" : "white"  }} /> : null}
            </InputAdornment>
          ),
        }}
      />
      {meta.error && meta.touched ? (
        <FormHelperText
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            fontWeight: "800",
            width: "fit-content",
            borderRadius: "20px",
            padding: ".1rem .5rem",
          }}
        >
          {meta.error}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default CustomInput;
