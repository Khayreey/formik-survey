import {
  Box,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  ListItemText,
  MenuItem,
  Select,
  SvgIcon,
  SvgIconTypeMap,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useField } from "formik";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface Props {
  label: string;
  name: string;
  options: Array<string>;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

const CustomMultipleSelect = ({Icon , label, options, ...props }: Props) => {
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
        {...props}
        {...field}
        sx={{
          backgroundColor: "rgb(0, 0, 0 , .8)",
          color: "white",
          borderRadius: "10px",
        }}
        multiple
        displayEmpty
        renderValue={(selected) => {
          
          return (
            <Box sx={{ display: "flex", gap: 1 }}>
              <SvgIcon color="primary">
                  <Icon sx={{color: Boolean(meta.error) && meta.touched ? "red" : "white" }} />
              </SvgIcon>
              {selected.length === 0 ? <em style={{ color: "gray" }}>Select Suitable Answers...</em> : selected.join(", ")}
            </Box>
          );
         
        }}
        MenuProps={MenuProps}
      >
        {options.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox
              color="primary"
              checked={field.value.indexOf(name) > -1}
            />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
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
export default CustomMultipleSelect;
