import {
  FETCH_NEWS_PENDING,
  FETCH_NEWS_SUCCESS,
  UPDATE_PAGE,
  HIDE_NEWS,
  UPVOTE_NEWS,
} from "./actions";
import { setHideNews, setUpVotes } from "./localstorage";

export interface State {
  data: any[];
  isLoading: boolean;
  page?: string;
}

const defaultState: State = {
  data: [],
  isLoading: false,
  page: "1"
};

const reducer = function (state: State = defaultState, action: any) {
  switch (action.type) {
    case FETCH_NEWS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_NEWS_SUCCESS:{
      
      return {
          ...state,
          data: action.data,
          isLoading: false,
      };
    }
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.page
    };
    case HIDE_NEWS: {
      const newList = [...state.data];
      const index = newList.findIndex((news) => action.objectID === news.objectID);
      newList[index] = {...newList[index], hide: true};
      setHideNews(action.objectID);
      return {
        ...state,
        data: newList
      }
    }
    case UPVOTE_NEWS: {
      const newList = [...state.data];
      const index = newList.findIndex((news) => action.objectID === news.objectID);
      newList[index].points++;
      setUpVotes(action.objectID, newList[index].points);
      return {
        ...state,
        data: [...newList]
      }
    }
    default:
      return state;
  }
};

export default reducer;
