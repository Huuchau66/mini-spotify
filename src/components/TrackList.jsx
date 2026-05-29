import Box
from "@mui/material/Box";

import Typography
from "@mui/material/Typography";

import useMusicPlayer
from "../hooks/useMusicPlayer";

function TrackList() {

  const {

    trackList,

    currentTrackIndex,

    playTrack,

  } = useMusicPlayer();

  return (

    <Box>

      {trackList.map(
        (track, index) => (

        <Box

          key={index}

          onClick={() =>
            playTrack(index)
          }

          sx={{

            p: 2,

            mb: 2,

            borderRadius: 2,

            cursor: "pointer",

            transition: "0.3s",

            bgcolor:
              currentTrackIndex === index
              ? "#1DB954"
              : "#282828",

            "&:hover": {

              bgcolor:
                currentTrackIndex === index
                ? "#1DB954"
                : "#333",
            },
          }}
        >

          <Typography
            sx={{

              color: "white",

              fontWeight: "bold",
            }}
          >

            {track.name}

          </Typography>

        </Box>

      ))}

    </Box>
  );
}

export default TrackList;