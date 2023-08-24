import ReactPageScroller from 'react-page-scroller';
import React from "react";
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';


export default class FullPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  handleBeforePageChange = number => {
    console.log(number);
  };



  render() {
    return (
      <React.Fragment>
        <ReactPageScroller
          animationTimer={1300}
          animationTimerBuffer={600}
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
        >
          <FirstComponent />
          <SecondComponent />
          <ThirdComponent />
          <FourthComponent />
        </ReactPageScroller>
      </React.Fragment>
    );
  }
}