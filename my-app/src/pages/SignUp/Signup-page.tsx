import { useState } from "react";
import {
  FormContainer,
  InputSection,
  SignInInnerContainer,
  SignInOuterContainer,
} from "./Signup-style";
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

export const SignupPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    dob?: string;
    email?: string;
    password?: string;
  }>({});

  const handleSignUp = async () => {
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = "Name is required";
    if (!dob) newErrors.dob = "Date of Birth is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/api/signup", {
        name,
        dob,
        email,
        password,
      });
      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Sign Up Error:", error);
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
              Sign up
            </Typography>
            <Typography fontSize={"1.125rem"} color="#969696">
              Sign up to enjoy the features of HD
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!errors.name} // Show error if there's an error for this field
                helperText={errors.name} // Display the error message
              />
              <TextField
                label="Date of Birth"
                variant="outlined"
                placeholder="Date of Birth"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                error={!!errors.dob}
                helperText={errors.dob}
              />
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
                error={!!errors.email}
                helperText={errors.email}
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
                error={!!errors.password}
                helperText={errors.password}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "capitalize", marginTop: "1rem" }}
                onClick={handleSignUp}
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
                <Typography fontSize={"1.125rem"} color="#6C6C6C">
                  Already have an Account ??
                </Typography>
                <Typography
                  fontSize={"1.125rem"}
                  color="#367AFF"
                  onClick={() => navigate("/signin")}
                  sx={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
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
