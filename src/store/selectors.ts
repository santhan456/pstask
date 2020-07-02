import { State } from "./reducer";
import {getHideNews, getUpVotes} from "./localstorage";

export function getNewsList(state: State): any[] {
  const {data} = state;
  const hiddenNews = getHideNews();
  const upVotes = getUpVotes();
  data.forEach(news => {
    news.hide = hiddenNews.indexOf(news.objectID.toString()) > -1; 
    if(upVotes[news.objectID]){
      news.points = upVotes[news.objectID];
    }
  })
  return data.filter(news => news.hide != true);
}

export function getNewsLoadingState(state: State): boolean {
  return state.isLoading;
}

export function getPageNumber(state: State): string | undefined{
  return state.page;
}