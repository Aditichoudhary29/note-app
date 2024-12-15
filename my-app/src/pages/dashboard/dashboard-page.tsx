import {
  DashboardInnerContainer,
  DashboardOuterContainer,
  RightContainer,
  TopBar,
} from "./dashboard-style";
import Logo from "../../assets/icons/logo.png";
import {
  Box,
  Button,
  Input,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const DashboardPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <DashboardOuterContainer>
      <TopBar>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img
            src={Logo}
            style={{
              width: isMobile ? "2rem" : "2.5rem",
              height: isMobile ? "2rem" : "2.5rem",
            }}
          />
          <Typography
            fontSize={isMobile ? "1.5rem" : "1.75rem"}
            fontWeight={600}
          >
            Dashboard
          </Typography>
        </div>
        <Typography
          fontSize={"1.125rem"}
          color="#367AFF"
          mr={isMobile ? "3rem" : "4rem"}
          sx={{
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          {" "}
          Sign Out
        </Typography>
      </TopBar>
      <DashboardInnerContainer>
        {/* <IntroductionContainer>
         
        </IntroductionContainer> */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            width: "40%",
            alignItems: "center",
          }}
        >
          <Typography fontSize={"2rem"} color={"#1F509A"} fontWeight={700}>
            ADD NEW NOTE
          </Typography>
          <Box sx={{ width: "100%", height: "20rem", position: "relative" }}>
            <Input
              multiline
              rows={7}
              // value={inputValue}
              // onChange={handleChange}
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                alignItems: "flex-start",
                padding: "10px",
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/sheet-paper-pen-with-blue-background_53876-41374.jpg?semt=ais_hybrid')",
                backgroundSize: "cover",

                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                fontSize: "1.25rem",
                border: "1px solid white",
                borderRadius: "8px",
                color: "white",
              }}
            />
          </Box>
          <Button
            sx={{
              width: "80%",
              color: "white",
              backgroundImage:
                "url('https://c889979.ssl.cf3.rackcdn.com/cgg/uploads/prod_img/2_10283_e.jpg?v=-62169984000')",
              backgroundColor: "white",
              backgroundSize: "contain",

              marginTop: "3rem",
              fontWeight: 600,
            }}
          >
            {" "}
            CREATE NOTE
          </Button>
        </div>
        <RightContainer>
          <Typography
            color="white"
            fontSize={"2rem"}
            fontWeight={700}
            textAlign={"center"}
            fontStyle={"Garamond"}
          >
            YOUR NOTES
          </Typography>
        </RightContainer>
      </DashboardInnerContainer>
    </DashboardOuterContainer>
  );
};
