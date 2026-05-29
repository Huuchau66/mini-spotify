import TrackList
from "./components/TrackList";

import Controller
from "./components/Controller";

import * as React from "react";

import CssBaseline
from "@mui/material/CssBaseline";

import Container
from "@mui/material/Container";

import Box
from "@mui/material/Box";

import Typography
from "@mui/material/Typography";

function App() {

  return (

    <React.Fragment>

      <CssBaseline />

      <Box
        sx={{

          minHeight: "100vh",

          display: "flex",

          justifyContent: "center",

          alignItems: "center",

          bgcolor: "#121212",
        }}
      >

        <Container
          maxWidth="sm"

          sx={{

            bgcolor: "#181818",

            p: 4,

            borderRadius: 4,

            boxShadow:
              "0 10px 40px rgba(0,0,0,0.5)",

          }}
        >

          <Typography
            variant="h4"

            sx={{

              mb: 4,

              fontWeight: "bold",

              textAlign: "center",

              color: "#1DB954",
            }}
          >

            Mini Spotify

          </Typography>

          <TrackList />

          <Controller />

        </Container>

      </Box>

    </React.Fragment>
  );
}

export default App;