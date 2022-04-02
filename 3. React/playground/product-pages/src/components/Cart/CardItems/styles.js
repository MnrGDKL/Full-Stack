import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: "100%",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    height: 70,
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
