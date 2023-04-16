import {
  FormControlLabel,
  FormLabel,
  Radio,
  FormControl,
  RadioGroup,
  FormHelperText,
} from "@mui/material";
import { useField } from "formik";
interface Props {
  name: string;
  label: string;
  options : Array<string>
}
const CustomRadioGroup = ({ options , label, ...props }: Props) => {
  const [field, meta, helpers] = useField(props);
  return (
    <FormControl error={Boolean(meta.error) && meta.touched}>
      <FormLabel focused sx={{ fontSize: "18px", fontWeight: "900" , fontFamily : 'relaway sans-serif'}}>
        {label}
      </FormLabel>
      <RadioGroup
        sx={{
          backgroundColor: "rgb(0, 0, 0 , .8)",
          borderRadius: "10px",
          padding: 1,
          border:
            Boolean(meta.error) && meta.touched ? "1px solid #d32f2f" : "none",
        }}
        {...props}
        {...field}
      >
        {options.map((item , index)=>
        <FormControlLabel
        key={index}
        value={item.toLowerCase()}
        control={<Radio sx={{ color: "gray" }} />}
        label={item}
         />
        )}
      </RadioGroup>
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
export default CustomRadioGroup;
