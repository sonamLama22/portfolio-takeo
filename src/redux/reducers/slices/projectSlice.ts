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
  },
  {
    id: uuidv4(),
    name: "Pokemon API",
    img: "pokemon",
  },
  {
    id: uuidv4(),
    name: "Country Flag",
    img: "country",
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

// export const { addContact, updateContact, removeContact } =
//   contactSlice.actions;
export const getProjectList = (state: RootState) => state.project.projectList;

export default projectSlice.reducer;
