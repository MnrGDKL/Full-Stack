import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  circular: {
    margin: "auto",
  },
  toolbar: { height: 70 },
  content: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 3,
  },
  // root: {
  //   flexGrow: 1,
  // },
}));
