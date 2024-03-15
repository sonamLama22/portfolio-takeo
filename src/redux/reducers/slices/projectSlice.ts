import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import Project from "../../../model/Project";
import { v4 as uuidv4 } from "uuid";

type initialStateType = {
  projectList: Project[];
};

const projectList: Project[] = [
  {
    id: uuidv4(),
    name: "Todo Application",
    img: "todo",
    desc: "A Todo App built using React is a straightforward, interactive application that allows users to manage their daily tasks efficiently. This app typically features a user-friendly interface where tasks can be easily added, marked as completed, or removed. Built with React, a popular JavaScript library for building user interfaces, the app showcases the power of React's component-based architecture, enabling developers to create reusable UI components.",
    link: "https://task-manager-takeo.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Pokemon API",
    img: "pokemon",
    desc: "A Pokémon App is a captivating application that allows users to explore a vast array of Pokémon creatures, each with its own unique characteristics, abilities, and traits. This app typically features a user-friendly interface where users can browse through a list of Pokémon, view detailed information about each one, and even engage in battles or other interactive experiences.",
    link: "https://github.com/steamnp/bfs45/tree/aashirwad-sonam-pokemonAPI",
  },
  {
    id: uuidv4(),
    name: "Country Flag",
    img: "country",
    desc: "A Country App is a dynamic application designed to provide users with comprehensive information about various countries around the world. It offers a user-friendly interface where users can explore a diverse range of countries, access detailed information about each one, and engage in a rich learning experience.",
    link: "https://github.com/steamnp/bfs45/tree/sonam-2",
  },
];

const initialState: initialStateType = {
  projectList,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.projectList.push(action.payload);
    },
  },
});

export const getProjectList = (state: RootState) => state.project.projectList;

export default projectSlice.reducer;
