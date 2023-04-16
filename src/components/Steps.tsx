import React, { useEffect } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import StepsActions from "./StepsActions";
import PersonalInformation from "./PersonalInformation";
import { Box } from "@mui/material";
import { FormikErrors } from "formik";
import RealestateInformation from "./RealestateInformation";
import PaymentInformation from "./PaymentInformation";

const steps = [
  {
    label: "WHO ARE YOU ?",
    component: PersonalInformation,
  },
  {
    label: "WHERE YOU WANT TO LIVE ?",
    component: RealestateInformation,
  },
  {
    label: "HOW YOU WANT TO PAY ?",
    component: PaymentInformation,
  },
];
interface Props {
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
  scroll: () => void;
  submitForm: (() => Promise<void>) & (() => Promise<any>);
}
const Steps = ({ submitForm, scroll, errors, setFieldTouched }: Props) => {
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    scroll();
  }, [activeStep]);

  return (
    <Stepper
      activeStep={activeStep}
      orientation="vertical"
      sx={{ padding: ".5rem", width: "100%" }}
    >
      {steps.map((step, index) => (
        <Step key={step.label} sx={{ width: "100%" }}>
          <StepLabel
            sx={{
              padding: ".5rem",
              backgroundColor: "rgb(255, 255, 255)",
              borderRadius: "20PX",
            }}
          >
            {step.label}
          </StepLabel>
          <StepContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem 2rem",
                padding: ".3rem 0rem",
              }}
            >
              <step.component />
            </Box>
            <StepsActions
              activeStep={activeStep}
              errors={errors}
              setFieldTouched={setFieldTouched}
              setActiveStep={setActiveStep}
              index={index}
              lengthOfSteps={steps.length}
              submitForm={submitForm}
            />
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
};

export default Steps;
