import { Box, Container, Paper, Typography, Grid, TextField, Button} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import DoctorCard from "../../component/commonComponents/doctorCard/DoctorCard";
import sendMessage from "../../../src/component/commonComponents/sendMessage/sendMessage"


const doctorCardList = [
  { text: "Иванов И.И.",   title: "Физеотерапевт",   image: "https://wmpics.space/di-PNZ3.jpg", path: "/doctorlist" },
  { text: "Петрова А.А.",  title: "Педиатр",         image: "https://wmpics.space/di-1JYP.jpg", path: "/doctorlist" },
  { text: "Смирнов А.Б.",  title: "Гастроэнтеролог", image: "https://wmpics.space/di-RR9F.jpg", path: "/doctorlist" },
  { text: "Сидорова Н.В.", title: "Отоларинголог",   image: "https://wmpics.space/di-M72A.jpg", path: "/doctorlist" },
  { text: "Иванов И.И.",   title: "Физеотерапевт",   image: "https://wmpics.space/di-PNZ3.jpg", path: "/doctorlist" },
  { text: "Петрова А.А.",  title: "Педиатр",         image: "https://wmpics.space/di-1JYP.jpg", path: "/doctorlist" },
  { text: "Смирнов А.Б.",  title: "Гастроэнтеролог", image: "https://wmpics.space/di-RR9F.jpg", path: "/doctorlist" },
  { text: "Сидорова Н.В.", title: "Отоларинголог",   image: "https://wmpics.space/di-M72A.jpg", path: "/doctorlist" },
];

const DoctorList = () => {
  const classes = useStyles();


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
          {doctorCardList.map((card) => (
            <Grid item key={card}>  
                 <DoctorCard key={card.image} props={card}/>  
                 
            </Grid>
          ))}
      </Grid>   
    </Container>
   </>
  );
};

export default DoctorList;




 





