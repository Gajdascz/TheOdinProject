import { createContext, useContext } from "react";

const GameContext = createContext();
const useGameContext = () => useContext(GameContext);

export { GameContext, useGameContext };
