import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, reset } from "../features/todos/todoSlice";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

const TodayTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { todos, isError, message } = useSelector(
    (state) => state.todos
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      return navigate("/login");
    }

    dispatch(getTodos());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  const completeTask = (id) => {
    const updatedTasks = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setText(updatedTasks);
  };

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Todos Dashboard</p>
      </section>

      <AddTask />

      <section className="content">
        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo) => (
              <Tasks key={todo._id} todo={todo} />
            ))}
          </div>
        ) : (
          <h3 className="text-center">You have not set any todos</h3>
        )}
      </section>
    </>
  );
};

export default TodayTask;
