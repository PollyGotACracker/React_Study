import { useState } from "react";
import uuid from "react-uuid";
import "../css/TodoMain.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { todoListData } from "../data/TodoData";

const TodoMain = (props) => {
  const [todoList, setTodoList] = useState(todoListData);
  const [todoItem, setTodoItem] = useState({
    t_id: uuid(),
    t_complete: false,
  });
  const [btnMode, setBtnMode] = useState("추가");

  const selectItem = (e) => {
    setBtnMode("수정");
    const target = e.target.parentNode.childNodes[2];
    const id = target.dataset.id;
    const input = document.querySelector(".Form input");
    input.value = target.textContent;
    input.dataset.id = id;
    input.focus();
  };

  const insertItem = (id) => {
    // Insert Item
    if (id === undefined) {
      setTodoList([...todoList, todoItem]);
      // Update Item
    } else {
      const setUpdate = todoList.map((item) => {
        if (item.t_id === id) {
          return { ...item, t_id: id, ...todoItem };
        }
        return item;
      });
      setTodoList([...setUpdate]);
      setBtnMode("추가");
    }
    // TodoItemData t_id 값 초기화
    setTodoItem({ ...todoItem, t_id: uuid() });
  };

  // cf) setState()에 값을 전달할 경우
  // 괄호 안에 spread 하지 않으면 제대로 동작하지 않음
  const toggleItem = (e) => {
    const target = e.target;
    const id = target.dataset.id;
    target.classList.toggle("complete");
    const setComplete = todoList.map((item) => {
      if (item.t_id === id) {
        return { ...item, t_complete: !item.t_complete };
      }
      return item;
    });
    setTodoList([...setComplete]);
  };

  const deleteItem = (e) => {
    const target = e.target.parentNode.childNodes[2];
    const id = target.dataset.id;
    const setRemove = todoList.filter((item) => item.t_id !== id);
    setTodoList([...setRemove]);
  };

  return (
    <section className="Main">
      <header className="Main header">오늘 할 일</header>
      <main className="Main container">
        <TodoInput
          todoItem={todoItem}
          setTodoItem={setTodoItem}
          insertItem={insertItem}
          btnMode={btnMode}
        />
        <TodoList
          todoList={todoList}
          toggleItem={toggleItem}
          selectItem={selectItem}
          deleteItem={deleteItem}
        />
      </main>
    </section>
  );
};

export default TodoMain;
