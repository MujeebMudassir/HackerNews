import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };

    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((item) => item.objectID !== action.payload),
      };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload };
    case HANDLE_PAGE: {
      if (action.payload === "inc") {
        let newPage = state.page + 1;
        if (newPage > state.nbPages - 1) {
          newPage = 0;
        }
        return { ...state, page: newPage };
      }
      if (action.payload === "dec") {
        let newPage = state.page - 1;
        if (newPage < 0) {
          newPage = state.nbPages - 1;
        }
        return { ...state, page: newPage };
      }
    }
    default:
      throw new Error(`no match action type ${action.type}`);
      break;
  }
};
export default reducer;
