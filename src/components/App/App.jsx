import React, { Component } from "react";
import MainPage from "../pages/MainPage";
import TransactionPage from "../pages/TransactionPage";
import "./App.css";



export default class App extends Component {

  state = {
    transType: "",
    // currentTransaction:"",
  };

  handleOpenTransaction = (transType) => {
    this.setState({ transType: transType });
  };
  
      //  handleOpenTransaction = (transType) => {
      //    this.setState({ currentTransaction: transType });
      //    };
  handleCloseTransaction = () => {
    this.setState({ transType: "" });
  }; 
  
  // handleCloseTransaction = () => {
  //   this.setState({ currentTransaction: "" });
  // };
  
  render() {
    const {transType}=this.state
    // const {currentTransaction}=this.state
    return (
      <>
        
        {!transType ? <MainPage
          handleOpenTransaction={this.handleOpenTransaction} /> :
          <TransactionPage
            transType={transType}
            handleCloseTransaction={this.handleCloseTransaction} />}
        {/* {!currentTransaction ?
          < MainPage handleOpenTransaction={this.handleOpenTransaction} /> :
          < TransactionPage
            transType={currentTransaction}
            handleCloseTransaction={this.handleCloseTransaction}
          />} */}
      </>
    );
  }
}


// const App = () => {
//   return<>
//     <MainPage />
//     <TransactionPage/>
//   </>
// };

// export default App;
