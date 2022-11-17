// Export a stateless functional component
// description, amount, createdAt
import React from "react";
import { connect } from "react-redux";

const expenseListItem = (props) => {
  //   console.log(props.expenses[1].description);
  console.log(props.expenses);
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(expenseListItem);
