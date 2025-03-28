import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("images");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (err) {
    console.error("Could not load state", err);
    return [];
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("images", JSON.stringify(state));
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const imageSlice = createSlice({
  name: "images",
  initialState: loadState(),
  reducers: {
    addImage: (state, action) => {
      state.push(action.payload);
      saveState(state);
    },
    removeImage: (state, action) => {
      const updatedState = state.filter((image) => image.id !== action.payload);
      saveState(updatedState);
      return updatedState;
    },
    renameImage: (state, action) => {
      const { id, newName } = action.payload;
      const image = state.find((image) => image.id === id);
      if (image) {
        image.name = newName;
        saveState(state);
      }
    },
  },
});

export const { addImage, removeImage, renameImage } = imageSlice.actions;
export default imageSlice.reducer;
