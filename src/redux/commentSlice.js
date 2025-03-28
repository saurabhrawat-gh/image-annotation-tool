import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comments",
  initialState: {},
  reducers: {
    addComment: (state, action) => {
      const { imageId, comment } = action.payload;
      if (!state[imageId]) {
        state[imageId] = [];
      }
      state[imageId].push(comment);
    },
    removeComment: (state, action) => {
      const { imageId, commentId } = action.payload;
      if (state[imageId]) {
        state[imageId] = state[imageId].filter((c) => c.id !== commentId);
      }
    },
  },
});

export const { addComment, removeComment } = commentSlice.actions;
export default commentSlice.reducer;
