import { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const DashboardPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [notes, setNotes] = useState<{ _id: string; content: string }[]>([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    } else {
      // Fetch notes on page load
      axios
        .get("http://localhost:5001/api/notes", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setNotes(response.data))
        .catch((error) => console.error("Error fetching notes:", error));
    }
  }, [navigate]);

  const handleAddNote = () => {
    const token = localStorage.getItem("token");
    if (!newNote.trim()) return;

    axios
      .post(
        "http://localhost:5001/api/notes",
        { content: newNote },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        setNotes([...notes, response.data.note]);
        setNewNote(""); // Clear input field
      })
      .catch((error) => console.error("Error adding note:", error));
  };

  const handleDeleteNote = (id: any) => {
    const token = localStorage.getItem("token");

    axios
      .delete(`http://localhost:5001/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setNotes(notes.filter((note) => note._id !== id));
      })
      .catch((error) => console.error("Error deleting note:", error));
  };

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
      </TopBar>
      <DashboardInnerContainer>
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
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                padding: "10px",
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/sheet-paper-pen-with-blue-background_53876-41374.jpg?semt=ais_hybrid')",
                backgroundSize: "cover",

                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                fontSize: "1.25rem",
                borderRadius: "8px",
                color: "black",
              }}
            />
          </Box>
          <Button
            sx={{
              width: "80%",
              color: "white",
              marginTop: "3rem",
              fontWeight: 600,
              backgroundImage:
                "url('https://c889979.ssl.cf3.rackcdn.com/cgg/uploads/prod_img/2_10283_e.jpg?v=-62169984000')",
              backgroundColor: "white",
              backgroundSize: "contain",
            }}
            onClick={handleAddNote}
          >
            CREATE NOTE
          </Button>
        </div>
        <RightContainer>
          <Typography
            color="white"
            fontSize={"2rem"}
            fontWeight={700}
            textAlign={"center"}
          >
            YOUR NOTES
          </Typography>
          {notes.map((note) => (
            <Box
              key={note._id}
              sx={{
                padding: "1rem",
                margin: "0.5rem 0",
                backgroundColor: "white",
                borderRadius: "8px",
              }}
            >
              <Typography>{note.content}</Typography>
              <Button onClick={() => handleDeleteNote(note._id)}>Delete</Button>
            </Box>
          ))}
        </RightContainer>
      </DashboardInnerContainer>
    </DashboardOuterContainer>
  );
};
