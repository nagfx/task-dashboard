import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import Subheader from "./Subheader";
import Header from "./Header"
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import {v4 as uuid } from "uuid";
import Search from "./Search";
import SearchList from "./SearchList";



const  Login = () => {
  const LOCAL_STORAGE_KEY = "tasks";
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))?? []);

  const [searchTerm, setSearchTerm] = useState();

  
  const addTaskHandler = (task) => {
    console.log(task);
    setTasks([...tasks, {id: uuid(), ...task}]);
  }

  const removeTaskHandler =(id) => {
    const newTaskList = tasks.filter((task) => {
      return task.id !== id;
    });
    
    setTasks(newTaskList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
 
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  };

  const filterList = tasks.filter((task) => {
  return  task.taskname.toLowerCase().includes(searchTerm);
  })

      // User Login info
const database = [
  {
    username: "admin",
    password: "admin123"
  },
  {
    username: "kiratech",
    password: "kiratech123"
  },
  {
    username: "futurelab",
    password: "futurelab123"
  }

];

  // error message to display

  const errors = {
    username: "invalid username",
    password: "invalid password"
  };

  

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { username, password } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === username.value);

    // Compare user info
    if (userData) {
      if (userData.password !== password.value) {
        // Invalid password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  
  const handleLogout = (event) => {
    //Prevent page reload
    event.preventDefault();
      setIsSubmitted(false);
      console.log("Ok");
  };
  
  
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    const renderForm=(
      <div className="ui large form main container">
        <form onSubmit={handleSubmit}>
          <div className="two fields">
            <div className="field">
              <label htmlFor="username">Username</label>
              <input placeholder="Username" type="text"
               id="username" name="username" required />
               {renderErrorMessage("username")}
            </div>
            <div className="field">
              <label>Password</label>
              <input placeholder="Password" name="password" type="password" required />
              {renderErrorMessage("password")}
            </div>
          </div>
            <div className="ui two fields">
                <div className="ui field checkbox ">
                    <input type="checkbox" tabIndex="0" className="hidden" />
                    <label>Keep logged in</label>
                </div>
              <div className="field">
                <input type="submit"  className="ui submit green button" value="Log in" />
                <div className="ui submit button disabled">Register</div>
              </div>
            </div>
        </form>
      </div>
      )

      
  return (
  <div className="ui container center main">
    {isSubmitted ? <Header attention="Dashboard Page" />  : <Header attention="Login Page" />}
    {isSubmitted ? <></>  : <Subheader />}
    {isSubmitted ? <></>  : renderForm}
    {isSubmitted ? <div>
      <AddTask addTaskHandler={addTaskHandler} />
      <TaskList tasks={tasks} getTaskId={removeTaskHandler} />
    </div>  : <></>}
    {isSubmitted ? <Search searchTerm={searchTerm} handleSearch={handleSearch}  /> : <></> }
    {isSubmitted ? <SearchList tasks={filterList} /> : <></> }
     {isSubmitted ? <div className="mains"><button type="submit" className="ui green button" onClick={handleLogout} >Logout</button></div>: <></>}

  </div>
  )
}

export default Login