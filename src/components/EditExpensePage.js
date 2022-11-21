import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedExpense = props.expenses.find((expense) => expense.id === id);
  return (
    <div>
      <ExpenseForm
        expense={selectedExpense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(id, expense));
          navigate("/");
          console.log("updated", expense);
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense(selectedExpense));
          navigate("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(mapStateToProps)(EditExpensePage);
