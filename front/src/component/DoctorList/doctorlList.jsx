import { Box, Container, Paper, Typography, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import DoctorCard from "../../component/commonComponents/doctorCard/DoctorCard";
import  { SendMessage }  from "../../component/commonComponents/sendMessage/sendMessage"; 
import OurSevicesComp from "../commonComponents/ourServices/OurSevicesComp";
import { DataContext } from "../../DataContext";


const DoctorList = ({ doctorArray }) => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  

  const [currentArray, setCurrentArray] = useState([
    doctorArray[0],
    doctorArray[1],
    doctorArray[2],
    doctorArray[3],
  ]);


  if (count < 0) {
    setCount(doctorArray.length - 1);
  }

  if (count === doctorArray.length) {
    setCount(0);
  }

  function caoruseleHandler(number) {
    let innnerNumber = number + 1;

    if (innnerNumber === doctorArray.length) {
      innnerNumber = 0;

      return innnerNumber;
    }
    if (innnerNumber < 0) {
      innnerNumber = doctorArray.length - 1;

      return innnerNumber;
    }

    return innnerNumber;
  }

  const changeCurrentArray = () => {
    let indexOne = count;
    let indexTwo = caoruseleHandler(indexOne);
    let indexThree = caoruseleHandler(indexTwo);
    let indexFour = caoruseleHandler(indexThree);

    setCurrentArray([
      doctorArray[indexOne],
      doctorArray[indexTwo],
      doctorArray[indexThree],
      doctorArray[indexFour],
    ]);
  };

  useEffect(() => {
    changeCurrentArray();
  }, [count]);


  return (
    
    <>
    <Paper className={classes.docPaper}>
      <Container fixed>
        <Box className="mainBox" mt={20}>
          <Typography className={classes.docTextH2} variant="h2">
            Наши врачи</Typography>
        </Box>
      </Container>
    </Paper>
    <div className={classes.docContent}>
    <Typography className={classes.docTextH3} variant="h3">
      Команда высококлассных специалистов</Typography>
    </div>
    <Container className={classes.cardGrid}>
      <Grid container spacing={2}> 
          {currentArray.map((card) => (
            <Grid item key={card}>  
                 <DoctorCard key={card.image} props={card}/>               
            </Grid>
          ))}
      </Grid>   
    </Container>
   <SendMessage /> 
 <OurSevicesComp />
 <DataContext />
   </>
  );
};

export default DoctorList;




 





