import { styled } from "@mui/material";

export const DashboardOuterContainer = styled("div")(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  position: "relative",
  backgroundImage:
    "url('https://img.freepik.com/free-vector/gradient-smooth-background_23-2148970443.jpg')",
  backgroundSize: "cover",

  backgroundRepeat: "no-repeat",
}));
export const TopBar = styled("div")(({ theme }) => ({
  position: "fixed",
  top: "0",
  height: "5rem",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0rem 2rem",
  backgroundColor: "white",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

  [theme.breakpoints.down("sm")]: {
    padding: "0rem 1rem",
  },
}));
export const DashboardInnerContainer = styled("div")(() => ({
  width: "100%",
  marginTop: "6rem",
  display: "flex",
  marginLeft: "2rem",
  marginRight: "2rem",
  gap: "2rem",
}));
export const RightContainer = styled("div")(() => ({
  borderRadius: "0.5rem",
  width: "50%",
  margin: "3.85rem 0rem",

  backgroundColor: "#55c8d6",
  border: "1px solid white",

  padding: "3rem",
  display: "flex",
  flexDirection: "column",
}));
