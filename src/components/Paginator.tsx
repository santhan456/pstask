import * as React from "react";
import { getPageNumber } from "../store/selectors";
import { bindActionCreators } from "redux";
import { updatePage as updatePageNum } from "../store/actions";
import { State } from "../store/reducer";
import { connect } from "react-redux";

interface ConnectProps {
    pageNumber?: string;
  }
  
  interface DispatchProps {
    updatePage: (page: string) => void; 
  }
  
  type Props = ConnectProps & DispatchProps;

const PaginatorImpl: React.FunctionComponent<Props> = (props) => {

    const {pageNumber, updatePage} = props;

    const prevClick = () => {
        const pageNum = pageNumber ? parseInt(pageNumber) : undefined;
        if(typeof pageNum == "number" && pageNum > 1){
            const newPage = (pageNum - 1).toString();
            updatePage(newPage)
        }
    }

    const nextClick = () => {
        const pageNum = pageNumber ? parseInt(pageNumber) : undefined;
        if(typeof pageNum == "number" && pageNum > -1){
            const newPage = (pageNum + 1).toString();
            updatePage(newPage)
        }
    }

    return <tfoot>
        <tr>
        <td colSpan={4}>
        <button className="page-btn" onClick={prevClick}>Prev</button>
        <> | </>
        <button className="page-btn" onClick={nextClick}>Next</button>
        </td>
        </tr>
    </tfoot>;
}

function mapStateToProps(state: State): ConnectProps {
    return {
      pageNumber: getPageNumber(state)
    };
  }
  
  const mapDispatchToProps = (dispatch: any) => {
    return {
      ...bindActionCreators(
        {
          updatePage: updatePageNum
        },dispatch
        ),
    }
  }

const Paginator = (connect(mapStateToProps, mapDispatchToProps)(PaginatorImpl));

export default Paginator;
