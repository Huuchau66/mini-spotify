import Box
from "@mui/material/Box";

import Button
from "@mui/material/Button";

import Typography
from "@mui/material/Typography";

import Stack
from "@mui/material/Stack";

import useMusicPlayer
from "../hooks/useMusicPlayer";

function Controller() {

  const {

    togglePlay,

    isPlaying,

    currentTrackName,

    playNextTrack,

    playPreviousTrack,

  } = useMusicPlayer();

  return (

    <Box

      sx={{

        mt: 4,

        display: "flex",

        flexDirection: "column",

        alignItems: "center",

        justifyContent: "center",
      }}
    >

      <Typography
        variant="h6"

        sx={{

          color: "white",

          mb: 3,

          textAlign: "center",
        }}
      >

        {currentTrackName ||
          "No song selected"}

      </Typography>

      <Stack
        direction="row"

        spacing={2}

        justifyContent="center"
      >

        <Button
          variant="contained"

          onClick={playPreviousTrack}
        >
          Prev
        </Button>

        <Button
          variant="contained"

          color="success"

          onClick={togglePlay}
        >

          {isPlaying
            ? "Pause"
            : "Play"}

        </Button>

        <Button
          variant="contained"

          onClick={playNextTrack}
        >
          Next
        </Button>

      </Stack>

    </Box>
  );
}

export default Controller;