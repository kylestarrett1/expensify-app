import React from "react";
import { useLocation, useParams } from "react-router-dom";

const EditExpensePage = (props) => {
  let location = useLocation();
  let { id } = useParams();
  console.log(location);

  return <div>Editing the expense with id of {id}.</div>;
};

export default EditExpensePage;
