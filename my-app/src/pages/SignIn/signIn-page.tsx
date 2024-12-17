import { useState } from "react";
import {
  FormContainer,
  InputSection,
  SignInInnerContainer,
  SignInOuterContainer,
} from "./signIn-style";
import MainImage from "../../assets/right-column.png";
import Logo from "../../assets/logo.png";
import {
  Button,
  Divider,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignInPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSignIn = async () => {
    const newErrors: { [key: string]: string } = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/api/signin", {
        email,
        password,
      });
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        navigate("/dashboard");
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        const serverErrors = error.response.data.message;
        setErrors({ server: serverErrors });
      } else {
        console.error("Sign In Error:", error);
      }
    }
  };

  return (
    <SignInOuterContainer>
      <SignInInnerContainer sx={{ width: isMobile ? "100%" : "65%" }}>
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
          <div style={{ width: isMobile ? "calc(100% - 2rem)" : "25rem" }}>
            <Typography textAlign={"left"} fontSize={"2.5rem"} fontWeight={700}>
              Sign in
            </Typography>
            <Typography fontSize={"1.125rem"} color="#969696">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email || !!errors.server}
                helperText={errors.email || errors.server}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                placeholder="Enter your password"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password || !!errors.server}
                helperText={errors.password || errors.server}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "capitalize", marginTop: "1rem" }}
                onClick={handleSignIn}
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
                <Typography fontSize={"1.125rem"} color="#6C6C6C">
                  Need an Account ??
                </Typography>
                <Typography
                  fontSize={"1.125rem"}
                  color="#367AFF"
                  onClick={() => navigate("/signup")}
                  sx={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
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
