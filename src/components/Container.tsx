import { State } from "../store/reducer";
import {  getNewsList, getPageNumber, getNewsLoadingState } from "../store/selectors";
import { connect } from "react-redux";
import * as React from "react";
import { fetchNews as getNews } from "../store/api";
import { updatePage as updatePageNum } from "../store/actions";
import { bindActionCreators } from "redux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import NewsList from "./NewsList";
import Paginator from "./Paginator";
import Chart from "./Chart";

interface ConnectProps {
  news: any[];
  isLoading: boolean;
  pageNumber?: string;
}

interface DispatchProps {
  fetchNews: (page?: string) => void;
  updatePage: (page: string) => void; 
}

type Props = ConnectProps & DispatchProps & RouteComponentProps<{page: string}> ;

const ContainerImpl: React.FunctionComponent<Props> = (props) => {
  const {news, fetchNews, match, updatePage, pageNumber, isLoading } = props;
  const {page} = match?.params;

  React.useEffect(() => {
      fetchNews(pageNumber);
  }, [pageNumber]);

  React.useEffect(() => {
    if(page){
      updatePage(page);
    }
  }, [page]);

  if(!news || news?.length === 0){
    return null;
  }

  const tableHead = <thead>
    <tr><th>Comments</th>
    <th>Votes</th>
    <th>Upvote</th>
    <th>Title</th></tr>
  </thead>;

  const loaderElement = <tr><td colSpan={4}><p className="loading">Loading...</p></td></tr>;

  return <>
    <table>
      {tableHead}
      <tbody>
        {isLoading ?  loaderElement : <NewsList news={news} />}
      </tbody>
      <Paginator/>
    </table>
    <Chart news={news}/>
  </>;
};

function mapStateToProps(state: State): ConnectProps {
  return {
    news: getNewsList(state),
    isLoading: getNewsLoadingState(state),
    pageNumber: getPageNumber(state)
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(
      {
        fetchNews: getNews,
        updatePage: updatePageNum
      },dispatch
      ),
  }
}
  
    

const Container = withRouter(connect(mapStateToProps, mapDispatchToProps)(ContainerImpl));

export default Container;
