import React from "react";
import TaskCard from "./TaskCard";

const TaskList = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getTaskId(id);
  };
  const renderTaskList = props.tasks.map((task) => {
    return (
      <TaskCard
        task={task}
        clickHandler={deleteContactHandler}
        key={task.id}
      />
    );
  });
  return <div className="ui celled list">{renderTaskList}</div>;
};

export default TaskList;