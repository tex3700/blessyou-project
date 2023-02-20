import { Box, Container, Paper, Typography, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import useStyles from "./styles";
import DoctorCard from "../../component/commonComponents/doctorCard/DoctorCard";
import  { SendMessage }  from "../../component/commonComponents/sendMessage/sendMessage"; 
import OurSevicesComp from "../commonComponents/ourServices/OurSevicesComp";
import { DataContext } from "../../DataContext";
import { apiStorage } from "./../../../api";


const DoctorList = () => {
  const classes = useStyles();
  const { doctorListArray, doctorArray } = useContext(DataContext);
  
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
          {doctorListArray.map((item) => (
            <Grid item key={item}>  
                 <DoctorCard key={item.id} props={item}/>               
            </Grid>
          ))}
      </Grid>   
    </Container>
   <SendMessage /> 
 <OurSevicesComp doctorArray={doctorArray}/>
   </>
  );
};

export default DoctorList;




 





