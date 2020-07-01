import { State } from "./reducer";

export function getNewsList(state: State): any[] {
  return state.data.filter(news => news.hide != true);
}

export function getNewsLoadingState(state: State): boolean {
  return state.isLoading;
}

export function getPageNumber(state: State): string | undefined{
  return state.page;
}