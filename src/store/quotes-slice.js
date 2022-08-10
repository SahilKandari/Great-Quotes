import { createSlice } from "@reduxjs/toolkit";

const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    comments: [],
    toggle: true,
    displayName: "",
    displayQuote: "",
    displayId: "",
    addComments: [],
    commentArry: [],
  },
  reducers: {
    viewComments(state, action) {
      state.comments = [];
      const comment = action.payload;

      for (const key in comment) {
        const name = comment[key].name;
        const quote = comment[key].quote;
        const id = key;
        const authorData = {
          name: name,
          quote: quote,
          id: id,
        };
        state.comments.push(authorData);
      }
    },
    ascendingOrder(state) {
      state.toggle = !state.toggle;

      state.comments?.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    descendingOrder(state) {
      state.toggle = !state.toggle;

      //   return b.name - a.name;
      // });
      state.comments?.sort((a, b) => (a.name > b.name ? -1 : 1));
    },
    display(state, action) {
      state.displayName = action.payload.name;
      state.displayQuote = action.payload.quote;
      state.displayId = action.payload.id;
    },
    addComment(state, action) {
      state.addComments.push(action.payload);
    },
    getComments(state, action) {
      state.commentArry = [];
      for (const key in action.payload) {
        const getComment = action.payload[key].comment;
        const getId = action.payload[key].id;

        const getObject = {
          comment: getComment,
          id: getId,
          key,
        };
        if (getId === state.displayId) {
          state.commentArry.push(getObject);
        }
      }
    },
    toggle(state) {
      state.toggleComment = !state.toggleComment;
    },
  },
});
export const quoteActions = quotesSlice.actions;
export default quotesSlice;
