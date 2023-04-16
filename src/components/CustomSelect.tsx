import { useField } from "formik";
import {
  Select,
  FormControl,
  FormLabel,
  MenuItem,
  FormHelperText,
  InputAdornment,
  SvgIconTypeMap,
  Box,
  SvgIcon,
  
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
interface Props {
  name: string;
  label: string;
  options: Array<string>;
  placeholder: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

const CustomSelect = ({ Icon , placeholder, options, label, ...props }: Props) => {
  const [field, meta, helpers] = useField(props);
  return (
    <FormControl
      fullWidth
      variant="outlined"
      error={Boolean(meta.error) && meta.touched}
    >
      <FormLabel focused sx={{ fontSize: "18px", fontWeight: "900" , fontFamily : 'relaway sans-serif' }}>
        {label}
      </FormLabel>
      <Select
        displayEmpty
        {...props}
        {...field}
        sx={{
          backgroundColor: "rgb(0, 0, 0 , .8)",
          color: "white",
          borderRadius: "10px",
        }}
        renderValue={(value) => {
          return (
            <Box sx={{ display: "flex", gap: 1 }}>
              <SvgIcon color="primary">
                  <Icon sx={{color: Boolean(meta.error) && meta.touched ? "red" : "white" }} />
              </SvgIcon>
              {value === "" ? <em style={{ color: "gray" }}>{placeholder}</em> : value}
            </Box>
          );
        }}
      >
        <MenuItem value="">
          <em style={{ color: "gray" }}>{placeholder}</em>
        </MenuItem>
        {options.map((e, index) => {
          return (
            <MenuItem key={index} value={e}>
              {e}
            </MenuItem>
          );
        })}
      </Select>
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

export default CustomSelect;
