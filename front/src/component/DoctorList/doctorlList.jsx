import { Box, Container, Paper, Typography, Grid, Card, CardMedia } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";


const doctorCardList = [
  { name: "Иванов И.И.", speciality: "Физеотерапевт", image: "https://wmpics.space/di-PNZ3.jpg", path: "/doctorlist" },
  { name: "Петрова А.А.", speciality: "Педиатр", image: "https://wmpics.space/di-1JYP.jpg", path: "/doctorlist" },
  { name: "Смирнов А.Б.", speciality: "Гастроэнтеролог", image: "https://wmpics.space/di-RR9F.jpg", path: "/doctorlist" },
  { name: "Сидорова Н.В.", speciality: "Отоларинголог", image: "https://wmpics.space/di-M72A.jpg", path: "/doctorlist" },
];

const DoctorList = () => {
  const classes = useStyles();
  return (
    <>
    <Paper className={classes.mainPaper}>
      <Container fixed>
        <Box className="mainBox" mt={20}>
          <Typography className={classes.docTextH2} variant="h2">Наши врачи</Typography>
        </Box>
      </Container>
    </Paper>
    <div className={classes.mainContent}>
    <Typography className={classes.docTextH3} variant="h3">Команда высококлассных специалистов</Typography>
    </div>
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={2}>
          {doctorCardList.map((card) => (
             <Grid item key={card} column  xs={12} sm={8} md={2}>
                  <Card className={classes.card}>
                   <CardMedia
                    className={classes.cardMedia}
                    to={card.path}
                    primary={card.name}
                    spec={card.speciality}
                    image={card.image}
                   />
                    
                 </Card>
             </Grid>   
          ))}           
      </Grid>   
    </Container>
   </>
  );
};

export default DoctorList;




