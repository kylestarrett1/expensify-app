/** @jest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";

test("should render ExpenseList with expenses", () => {
  render(<ExpenseList expenses={expenses} />);
  expect(screen.getByRole("expenseList")).toMatchSnapshot();
});
