import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./imageSlice";
import commentReducer from "./commentSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("appState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("appState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const store = configureStore({
  reducer: {
    images: imageReducer,
    comments: commentReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
