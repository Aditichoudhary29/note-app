import { styled } from "@mui/material";

export const SignInOuterContainer = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  position: "relative",
}));
export const SignInInnerContainer = styled("div")(() => ({
  width: "100%",
  height: "100vh",
}));
export const FormContainer = styled("div")(() => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "8.5rem",
  "@media (max-width: 400px)": {
    marginBottom: "2rem",
  },
}));
export const InputSection = styled("div")(() => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  marginTop: "1.5rem",
  gap: "1rem",
}));
