import { Link } from "react-router-dom";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { useStyles } from "../medicalHistory";

export const ActiveRecords = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Button
        component={Link}
        to="/patientAccount/appointment"
        className={classes.myNotes}
      >
        <Typography className={classes.notesText}>
          У Вас нет активных записи на приём
        </Typography>
        <Typography className={classes.notesTextActive}>записаться</Typography>
      </Button>
      <Box style={{ minHeight: "400px" }}></Box>
    </Container>
  );
};
