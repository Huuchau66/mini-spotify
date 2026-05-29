import { useContext }
from "react";

import {
  MusicPlayerContext
} from "../contexts/MusicPlayerContext";

const useMusicPlayer = () => {

  const {
    state,
    setState,
  } = useContext(
    MusicPlayerContext
  );

  // play track

  function playTrack(index) {

    if (
      index ===
      state.currentTrackIndex
    ) {

      togglePlay();

    }

    else {

      state.audioPlayer.pause();

      const newAudio =
        new Audio(
          state.tracks[index].file
        );

      newAudio.play();

      setState((state) => ({

        ...state,

        audioPlayer:
          newAudio,

        currentTrackIndex:
          index,

        isPlaying: true,

      }));
    }
  }

  // play / pause

  function togglePlay() {

    if (state.isPlaying) {

      state.audioPlayer.pause();

    }

    else {

      state.audioPlayer.play();

    }

    setState((state) => ({

      ...state,

      isPlaying:
        !state.isPlaying,

    }));
  }

  // next

  function playNextTrack() {

    const nextIndex =

      (state.currentTrackIndex + 1)
      %
      state.tracks.length;

    playTrack(nextIndex);
  }

  // previous

  function playPreviousTrack() {

    const prevIndex =

      (
        (
          state.currentTrackIndex - 1
        )
        +
        state.tracks.length
      )
      %
      state.tracks.length;

    playTrack(prevIndex);
  }

  return {

    trackList:
      state.tracks,

    currentTrackIndex:
      state.currentTrackIndex,

    currentTrackName:

      state.currentTrackIndex !== null

      &&

      state.tracks[
        state.currentTrackIndex
      ].name,

    isPlaying:
      state.isPlaying,

    playTrack,

    togglePlay,

    playNextTrack,

    playPreviousTrack,
  };
};

export default useMusicPlayer;