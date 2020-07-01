import {
  FETCH_NEWS_PENDING,
  FETCH_NEWS_SUCCESS,
  UPDATE_PAGE,
  HIDE_NEWS,
  UPVOTE_NEWS,
} from "./actions";
import NewsList from "../components/NewsList";

export interface State {
  data: any[];
  isLoading: boolean;
  page?: string;
}

const defaultState: State = {
  data: [],
  isLoading: false
};

const reducer = function (state: State = defaultState, action: any) {
  switch (action.type) {
    case FETCH_NEWS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
    };
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.page
    };
    case HIDE_NEWS: {
      const newList = [...state.data];
      const index = newList.findIndex((news) => action.objectID === news.objectID);
      newList[index] = {...newList[index], hide: true};
      return {
        ...state,
        data: newList
      }
    }
    case UPVOTE_NEWS: {
      const newList = [...state.data];
      newList[action.index].points++;
      return {
        ...state,
        data: newList
      }
    }
    default:
      return state;
  }
};

export default reducer;
