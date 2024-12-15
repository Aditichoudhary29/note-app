import {
  FormContainer,
  InputSection,
  SignInInnerContainer,
  SignInOuterContainer,
} from "./Signup-style";
import MainImage from "../../assets/right-column.png";
import Logo from "../../assets/logo.png";
// import EyeOff from "../../assets/eye-off.png";
import {
  Button,
  Divider,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
export const SignupPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <SignInOuterContainer>
      <SignInInnerContainer
        sx={{
          width: isMobile ? "100%" : "65%",
        }}
      >
        <img
          src={Logo}
          style={{
            marginTop: "1.5rem",
            marginLeft: "1.5rem",
            position: "fixed",
            top: "0",
          }}
        />
        <FormContainer>
          <div
            style={{
              width: isMobile ? "calc(100% - 2rem)" : "25rem",
            }}
          >
            <Typography
              textAlign={"left"}
              fontSize={"2.5rem"}
              fontWeight={700}
              letterSpacing={"-4%"}
            >
              Sign up
            </Typography>
            <Typography
              fontSize={"1.125rem"}
              color=" #969696
"
            >
              Sign up to enjoy the feature of HD
            </Typography>
            <InputSection>
              <TextField
                label="Your Name"
                variant="outlined"
                placeholder="Enter your name"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                sx={{
                  borderRadius: "0.625rem",
                }}
              />
              <TextField
                label="Date of Birth"
                variant="outlined"
                placeholder="Date of Birth"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
              <TextField
                label="Email"
                variant="outlined"
                placeholder="Enter your email"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
              <TextField
                label="OTP"
                variant="outlined"
                placeholder="Enter your OTP"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Sign Up
              </Button>
              <Divider style={{ marginTop: "1rem" }}>or</Divider>
              <Button
                variant="outlined"
                sx={{
                  border: "1px solid #E6E8E7",
                  textTransform: "capitalize",
                  color: "black",
                  marginBottom: "1rem",
                }}
              >
                Continue with Google
              </Button>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <Typography
                  textAlign={"center"}
                  fontSize={"1.125rem"}
                  color=" #6C6C6C
"
                >
                  Already have an Account ??
                </Typography>
                <Typography
                  fontSize={"1.125rem"}
                  color="#367AFF"
                  onClick={() => {
                    navigate("/signin");
                  }}
                  sx={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Sign in
                </Typography>
              </div>
            </InputSection>
          </div>
        </FormContainer>
      </SignInInnerContainer>
      {!isMobile && (
        <SignInInnerContainer>
          <img src={MainImage} style={{ width: "100%", height: "100vh" }} />
        </SignInInnerContainer>
      )}
    </SignInOuterContainer>
  );
};
