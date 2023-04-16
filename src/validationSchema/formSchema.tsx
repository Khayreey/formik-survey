import * as Yup from "yup";
import { listOfCountries, countriesData } from "../data/CountriesData";

export const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Enter A valid Email").required("Required"),
  phone: Yup.string()
    .min(11, "Phone Must Be 11 number")
    .max(11, "Phone Must Be 11 number")
    .required("required")
    .test("startWith", "Must start With 010 || 011 || 012 ", (value) => {
      return (
        value.startsWith("010") ||
        value.startsWith("011") ||
        value.startsWith("012")
      );
    }),
  birthdate: Yup.date()
    .min(new Date(Date.now() - 1892160000000), "You Must Be 70 Or Under 70")
    .max(new Date(Date.now() - 567648000000), "You Must Be 18 Or Over 18")
    .required("required"),
  country: Yup.string()
    .oneOf(listOfCountries(), "Country Not Availiabe")
    .required("required"),
  city: Yup.string()
    .required("required")
    .test(
      "isCity",
      "city Dosent Exist in This country",
      function (value, context) {
        const cities = countriesData.find(
          (item) => item.country === context.parent.country
        )?.cities;
        if (Boolean(cities && cities.some((item) => item === value)))
          return true;
        else {
          return this.createError({
            message: `${value} Dosent Exist In This Country`,
          });
        }
      }
    ),
  gender: Yup.string()
    .oneOf(["male", "female"], "Gender is male or female only")
    .required("required"),
  currentHome: Yup.string().required("required"),
  buyHome: Yup.string().required("required"),
  reason: Yup.string().required("required"),
  with: Yup.string().required("required"),
  howMany: Yup.string().required("required"),
  area: Yup.string().required("required"),
  prefer: Yup.array().min(1, "At Least Choose One").required("required"),
  payWay: Yup.string().required("required"),
  rentOrBuy: Yup.string().required("required"),
  income: Yup.string().required("required"),
  job: Yup.string().required("required"),
  otherJob: Yup.string().test(
    "other Job",
    "reqired",
    function (value, context) {
      if (
        value === "" ||
        (value === undefined && context.parent.job === "Other")
      ) {
        return this.createError({ message: "What Is The Other Job" });
      } else {
        return true;
      }
    }
  ),
});

export default formSchema;
