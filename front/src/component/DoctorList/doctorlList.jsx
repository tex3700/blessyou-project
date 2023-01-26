import { Box, CardMedia, Container, Paper, Typography, Grid, Card, CardContent } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import image from "../../static/images/Bunnerback.jpg"; 
import { gridclasses } from "@mui/system";
import { cardclasses } from "@mui/material";

const cards = [1,1,1,1];   

const doctorCardList = [
  { name: "Иванов И.И. Гастроинтеролог", path: "/DoctorList" },
  { name: "Педиатр", path: "/doctors" },
  { name: "Окулист", path: "/contacts" },
  { name: "Оторингология", path: "/contacts" },
  { name: "Терапевт", path: "/contacts" },
  { name: "Физиотерапия", path: "/contacts" },
];


const DoctorList = () => {
  const classes = useStyles();
  return (
    <>
    <Paper className={classes.mainPaperh2}>
      <Container fixed>
        <Box className="mainBoxh2" mt={20}>
          <Typography variant="h2">Наши врачи</Typography>
        </Box>
      </Container>
    </Paper>
    <div className={classes.mainContenth3}>
    <Typography variant="h3" align="center" gutterBottom>Команда высококлассных специалистов</Typography>
    </div>
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={2}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={8} md={4}>
              <Card className={classes.card}>
                <CardMedia
                className={classes.cardMedia}
                image="https://wmpics.space/di-PNZ3.jpg"
                title="Image title"
                />
                <CardContent className={classes.cardContent}>
                <Typography variant1="h5" align="center" gutterBottom>Иванов И.И.</Typography>
                <Typography align="center" gutterBottom>Физеотерапевт</Typography>
                </CardContent>
              </Card>
              <Card className={classes.card}>
                <CardMedia
                className={classes.cardMedia}
                image="https://wmpics.space/di-1JYP.jpg"
                title="Image title"
                />
                <CardContent className={classes.cardContent}>
                <Typography variant1="h5" align="center" gutterBottom>Петрова А.А.</Typography>
                <Typography align="center" gutterBottom>Педиатр</Typography>
                </CardContent>
              </Card>
              <Card className={classes.card}>
                <CardMedia
                className={classes.cardMedia}
                image="https://wmpics.space/di-RR9F.jpg"
                title="Image title"
                />
                <CardContent className={classes.cardContent}>
                <Typography variant1="h5" align="center" gutterBottom>Смирнов А.Б.</Typography>
                <Typography align="center" gutterBottom>Гастроэнтеролог</Typography>
                </CardContent>
              </Card>
              <Card className={classes.card}>
                <CardMedia
                className={classes.cardMedia}
                image="https://wmpics.space/di-M72A.jpg"
                title="Image title"
                />
                <CardContent className={classes.cardContent}>
                <Typography variant1="h5" align="center" gutterBottom>Сидорова Н.В.</Typography>
                <Typography align="center" gutterBottom>Отоларинголог</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>   
    </Container>
            
    </>
  );
};
                          //Пока не доделал
export default DoctorList;


