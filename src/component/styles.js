import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    // display: "flex",
    height: "100%",
    width:"1440px",
    margin:"0 auto",
    border:"1px solid black"
  },
  toolbar: {
    height: "50px",
  },
  content: {
    width: "100%",
    flexGrow: "1",
    // padding: "2em",
  },
}));
