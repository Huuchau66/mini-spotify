import {
  createContext,
  useState,
} from "react";

import Carnaval
from "../assets/Carnaval.mp3";

import EscapeYourLove
from "../assets/EscapeYourLove.mp3";

import Water
from "../assets/Water.mp3";

export const MusicPlayerContext =
  createContext();

const defaultValues = {

  audioPlayer:
    new Audio(),

  tracks: [

    {
      name: "Carnaval",
      file: Carnaval,
    },

    {
      name: "Escape Your Love",
      file: EscapeYourLove,
    },

    {
      name: "Water",
      file: Water,
    },

  ],

  currentTrackIndex: null,

  isPlaying: false,
};

function MusicPlayerProvider({
  children,
}) {

  const [state, setState] =
    useState(defaultValues);

  return (

    <MusicPlayerContext.Provider
      value={{
        state,
        setState,
      }}
    >

      {children}

    </MusicPlayerContext.Provider>

  );
}

export default MusicPlayerProvider;