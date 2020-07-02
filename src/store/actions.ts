export const FETCH_NEWS_PENDING = "FETCH_NEWS_PENDING";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR";
export const UPDATE_PAGE = "UPDATE_PAGE";
export const HIDE_NEWS = "HIDE_NEWS";
export const UPVOTE_NEWS= "UPVOTE_NEWS";

export function fetchNewsPending() {
  return {
    type: FETCH_NEWS_PENDING,
  };
}

export function fetchNewsSuccess(data: any) {
  return {
    type: FETCH_NEWS_SUCCESS,
    data: data?.hits
  }
}

export function fetchNewsError(error: Error) {
  return {
    type: FETCH_NEWS_ERROR,
    error: error,
  };
}

export  function updatePage(page: string) {
  return {
    type: UPDATE_PAGE,
    page
  };
}

export function hideNews(objectID: number) {
  return {
    type: HIDE_NEWS,
    objectID
  };
}

export function upVoteNews(objectID: number){
  return {
    type: UPVOTE_NEWS,
    objectID
  };
}