import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { FormikErrors } from "formik";

interface Props {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  lengthOfSteps: number;
  activeStep: number;
  errors: FormikErrors<{
    email: string;
    country: string;
    city: string;
    gender: string;
    birthdate: string;
    name: string;
    phone: string;
    currentHome: string;
    buyHome: string;
    reason: string;
    with: string;
    howMany: string;
    area: string;
    prefer: string[] | undefined;
    payWay: string;
    rentOrBuy: string;
    income: string;
    job: string;
    otherJob: string;
  }>;
  setFieldTouched: (
    field: string,
    isTouched?: boolean | undefined,
    shouldValidate?: boolean | undefined
  ) => void;
  submitForm: (() => Promise<void>) & (() => Promise<any>);
}

const StepsActions = ({
  submitForm,
  errors,
  setFieldTouched,
  activeStep,
  setActiveStep,
  index,
  lengthOfSteps,
}: Props) => {
  const handleNext = () => {
    if (activeStep === 0) {
      setFieldTouched("email", true, true);
      setFieldTouched("country", true, true);
      setFieldTouched("city", true, true);
      setFieldTouched("gender", true, true);
      setFieldTouched("phone", true, true);
      setFieldTouched("name", true, true);
      setFieldTouched("birthdate", true, true);

      if (
        errors.name ||
        errors.email ||
        errors.country ||
        errors.city ||
        errors.phone ||
        errors.birthdate ||
        errors.gender
      )
        return;
    }

    if (activeStep === 1) {
      setFieldTouched("currentHome", true, true);
      setFieldTouched("buyHome", true, true);
      setFieldTouched("reason", true, true);
      setFieldTouched("with", true, true);
      setFieldTouched("howMany", true, true);
      setFieldTouched("area", true, true);
      setFieldTouched("prefer", true, true);

      if (
        errors.currentHome ||
        errors.buyHome ||
        errors.reason ||
        errors.with ||
        errors.howMany ||
        errors.area ||
        errors.prefer
      )
        return;
    }
    if (activeStep === 2) {
      setFieldTouched("payWay", true, true);
      setFieldTouched("rentOrBuy", true, true);
      setFieldTouched("income", true, true);
      setFieldTouched("job", true, true);
      setFieldTouched("otherJob", true, true);
      if (
        errors.payWay ||
        errors.rentOrBuy ||
        errors.income ||
        errors.job ||
        errors.otherJob
      )
        return;
      else {
        submitForm();
      }
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <div>
        <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
          {index === lengthOfSteps - 1 ? "Finish" : "Continue"}
        </Button>
        {index !== 0 ? (
          <Button
            disabled={index === 0}
            onClick={handleBack}
            sx={{ mt: 1, mr: 1 }}
          >
            Back
          </Button>
        ) : null}
      </div>
    </Box>
  );
};

export default StepsActions;
