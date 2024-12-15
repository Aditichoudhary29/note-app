import MainImage from "../../assets/right-column.png";
import Logo from "../../assets/logo.png";
// import EyeOff from "../../assets/eye-off.png";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  InputSection,
  SignInInnerContainer,
  SignInOuterContainer,
} from "./signIn-style";
export const SignInPage = () => {
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
        <img src={Logo} style={{ marginTop: "1.5rem", marginLeft: "1.5rem" }} />
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
              Sign in
            </Typography>
            <Typography
              fontSize={"1.125rem"}
              color=" #969696
  "
            >
              Please login to continue to your account.
            </Typography>
            <InputSection>
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
              <Typography
                color=" #367AFF"
                sx={{ cursor: "pointer", textDecoration: "underline" }}
              >
                Forgot Password ?
              </Typography>
              <FormControlLabel
                control={<Checkbox />}
                label="Keep me logged in"
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Sign In
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
                  Need an Account ??
                </Typography>
                <Typography
                  fontSize={"1.125rem"}
                  color="#367AFF"
                  onClick={() => {
                    navigate("/signup");
                  }}
                  sx={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Create one
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
