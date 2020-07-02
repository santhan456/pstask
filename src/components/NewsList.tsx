import * as React from "react";
import {hideNews as hideNewsAction, upVoteNews as upVoteAction} from "../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

interface Props{
    news: any[];
}

interface DispatchProps{
  hideNews(objectID: number): void;
  upVoteNews(objectID: number): void;
}

const NewsListImpl: React.FunctionComponent<Props & DispatchProps> = (props) => {
    const {news, hideNews, upVoteNews} = props;

    const hide = (objectID: number) => {
      hideNews(objectID);
    }

    const upVote = (objectID: number) => {
      upVoteNews(objectID);
    }
    
    return <>
    {news.map((news, index) => <tr key={news.objectID}>
            <td>{news.num_comments}</td>
            <td>{news.points}</td>
            <td> <span className="up-vote" onClick={() => upVote(news.objectID)}>&#x25B2;</span></td>
            <td>
              {news.title}
             {news.url && <a className="url" target="_blank" href={news.url}>({news.url})</a>  }
              <span className="author"> by </span>
              <strong className="author">{news.author}</strong>
              <button className="hide-btn" onClick={() => hide(news.objectID)}>[ Hide ]</button>
            </td>
          </tr>)
    }</>;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(
      {
        hideNews: hideNewsAction,
        upVoteNews: upVoteAction
      },dispatch
      ),
  }
}

const NewsList = (connect(undefined, mapDispatchToProps)(NewsListImpl));

export default NewsList;