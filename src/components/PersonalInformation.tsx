import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { listOfCountries, countriesData } from "../data/CountriesData";
import { useField } from "formik";
import { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TtyIcon from "@mui/icons-material/Tty";
import CakeIcon from "@mui/icons-material/Cake";
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CustomRadioGroup from "./CustomRadioGroup";


const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
const PersonalInformation = () => {
  const [cities, setCities] = useState<string[]>([]);
  const [field] = useField("country");
  
  useEffect(() => {
    setCities(() => {
      return (
        countriesData.find((item) => item.country === field.value)?.cities || []
      );
    });
  }, [field.value]);

  return (
    <>
      <CustomInput
        label="*NAME"
        name="name"
        placeholder="Enter Your Name"
        Icon={AccountCircleIcon}
      />
      <CustomInput
        label="*EMAIL"
        name="email"
        placeholder="Enter Your Email"
        Icon={AlternateEmailIcon}
      />
      <CustomInput
        label="*PHONE"
        name="phone"
        placeholder="Enter Your Phone"
        Icon={TtyIcon}
      />
      <CustomInput
        label="*BIRTH DATE"
        type="date"
        name="birthdate"
        placeholder="choose your birthdate"
        Icon={CakeIcon}
      />
      <CustomSelect
        label="*COUNTRY"
        name="country"
        options={listOfCountries()}
        placeholder="Select Your Country"
        Icon={FlagCircleIcon}
      />

      <CustomSelect
        label="*CITY"
        name="city"
        options={cities}
        placeholder="Select Your City"
        Icon={LocationCityIcon}
      />
      <CustomRadioGroup
        name="gender"
        label="*GENDER"
        options={["Female", "Male"]}
      />
      {/* <CustomMultipleSelect
        name="location"
        label="select your favorites"
        options={names}
      /> */}
    </>
  );
};

export default PersonalInformation;
