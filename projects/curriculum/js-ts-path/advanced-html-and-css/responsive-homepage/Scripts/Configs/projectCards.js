import { projectCard } from "../Builders/projectCard.js";

const battleShipCard = projectCard({
  imgLink: "./Assets/Images/ProjectScreenShots/battleship.png",
  imgAlt: "",
  projectName: "Battleship",
  projectDesc:
    "Play the game of battleship with a friend, take on an AI opponent, or watch two AIs battle it out. Three AI difficulties provided, can you beat Fleet Admiral Byte Beard?",
  githubLink: "https://github.com/Gajdascz/battleship",
  livePreviewLink: "https://gajdascz.github.io/battleship/",
});

const todoListCard = projectCard({
  imgLink: "./Assets/Images/ProjectScreenShots/todolisttodo.png",
  imgAlt: "",
  projectName: "TodoList",
  projectDesc: "A task management app. Provides interactive task cards, color coding, sorting, grouping, and more!",
  githubLink: "https://github.com/Gajdascz/todo-list-todo",
  livePreviewLink: "https://gajdascz.github.io/todo-list-todo/",
});

const odinEyeCard = projectCard({
  imgLink: "./Assets/Images/ProjectScreenShots/odinEyeWeather.png",
  imgAlt: "",
  projectName: "OdinEye",
  projectDesc:
    "A simple weather information app. This provided me with an introduction to web API integration and asynchronous programming.",
  githubLink: "https://github.com/Gajdascz/weather-app",
  livePreviewLink: "https://gajdascz.github.io/weather-app/",
});

const ticTacToeCard = projectCard({
  imgLink: "./Assets/Images/ProjectScreenShots/ticTacToe.png",
  imgAlt: "",
  projectName: "TicTacToe",
  projectDesc:
    "The classic game of Tic-Tac-Toe. Play against your friend, the computer, or watch two computers battle it out! AI implements a minimax algorithm*. The algorithm does contain a bug where it will does not choose that absolute optimal move 100% of the time.",
  githubLink: "https://github.com/Gajdascz/odin-tic-tac-toe",
  livePreviewLink: "https://gajdascz.github.io/odin-tic-tac-toe/",
});

const knightsTravailsCard = projectCard({
  imgLink: "./Assets/Images/ProjectScreenShots/knightsTravails.png",
  imgAlt: "",
  projectName: "Knights Travails",
  projectDesc:
    "Generates the shortest path for a knight chess piece to reach any target square from a given starting position on an empty chess board. *Interface needs to be implemented",
  githubLink: "https://github.com/Gajdascz/knights-travails",
  livePreviewLink: "https://github.com/Gajdascz/knights-travails",
});

const hashMap = projectCard({
  imgLink: "./Assets/Images/ProjectScreenShots/hashMap.png",
  imgAlt: "",
  projectName: "Hash Map",
  projectDesc: "An implementation of a basic hash map and hash set data structure. *Interface needs to be implemented",
  githubLink: "https://github.com/Gajdascz/hash-map",
  livePreviewLink: "https://github.com/Gajdascz/hash-map",
});

const allCards = [battleShipCard, todoListCard, odinEyeCard, ticTacToeCard, knightsTravailsCard, hashMap];

export { allCards };
