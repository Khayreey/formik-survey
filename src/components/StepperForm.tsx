import { useRef , useState } from "react";
import Box from "@mui/material/Box";
import { Formik, Form } from "formik";
import Steps from "./Steps";
import formSchema from "../validationSchema/formSchema";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export default function StepperForm() {
  const stepRef = useRef<null | HTMLDivElement>(null);
  const [isFormSumbit , setIsFormSubmit] = useState<boolean>(false)
  const scrollBack = () => {
    if (stepRef && stepRef.current) {
      stepRef.current.scroll({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <>
     {isFormSumbit ?  <Box
      sx={{
        width: "100%",
        display : 'flex' ,
        flexDirection : 'column' ,
        alignItems : 'center' , 
        justifyContent : 'center' ,
        height: "100%",
      }}
     >
      <p style={{fontSize : '30px' , fontWeight : '900' }}>Thank You For Your Time</p>
       <CheckCircleOutlineIcon sx={{fontSize : '200px' , color : '#4BB543'}}/>
     </Box>
     :
     <Box
      sx={{
        width: "100%",
        padding: "2rem",
        maxHeight: "100%",
        overflow: "auto",
      }}
      ref={stepRef}
    >
      <Formik
        initialValues={{
          email: "",
          country: "",
          city: "",
          gender: "",
          birthdate: "",
          name: "",
          phone: "",
          currentHome: "",
          buyHome: "",
          reason: "",
          with: "",
          howMany: "",
          area: "",
          prefer: [],
          payWay: "",
          rentOrBuy: "",
          income: "",
          job: "",
          otherJob: "",
        }}
        validateOnMount
        onSubmit={(e) => {
          console.log(e);
          setIsFormSubmit(true)
        }}
        validationSchema={formSchema}
      >
        {({ errors, setFieldTouched, submitForm, isValid }) => (
          <Form>
            <Steps
              submitForm={submitForm}
              errors={errors}
              scroll={scrollBack}
              setFieldTouched={setFieldTouched}
            />
          </Form>
        )}
      </Formik>
    </Box>  
}
    </>
  );
}
