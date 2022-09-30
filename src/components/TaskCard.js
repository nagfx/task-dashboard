import React from "react";
import user from "../images/task-6-128.png";

const TaskCard = (props) => {
  const { id, taskname, date } = props.task;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{taskname}</div>
        <div>{date}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default TaskCard;