import {
  fetchNewsPending,
  fetchNewsSuccess,
  fetchNewsError,
} from "./actions";

export function fetchNews(page?: string) {
  return (dispatch: any) => {
    dispatch(fetchNewsPending());
    fetch(`https://hn.algolia.com/api/v1/search?tags=(story,poll,comment,job)&page=${page || 1}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchNewsSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchNewsError(error));
      });
  };
}
