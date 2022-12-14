import { useState, useCallback } from "react";
import moment from "moment";
import uuid from "react-uuid";
import "../css/Todo.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { InitData } from "../data/InitData";

const TodoMain = () => {
  const [todoContentList, setTodoContentList] = useState([]);

  // TodoInput 에 있던 todoContent state 를 TodoMain 으로 이동하기
  const [todoContent, setTodoContent] = useState(InitData());

  // useCallback( ()=>{}, [매개변수들] )
  const todoInsert = useCallback(
    (t_content) => {
      if (!todoContent.id) {
        // 전달된 할일 content 를 사용하여 새로운 객체를 만들고
        // id 값 추가하기
        const data = { ...InitData(), t_content, id: uuid() };
        // 배열에 저장하고
        setTodoContentList([...todoContentList, data]);
        // 기존의 todoContent state 는 초기화 하기
        setTodoContent({ ...InitData() });
      } else {
        const updateList = todoContentList.map((item) => {
          if (item.id === todoContent.id) {
            item.t_content = todoContent.t_content;
          }
          return item;
        });
        setTodoContentList([...updateList]);
      }
      setTodoContent({ ...InitData() });
    },
    [setTodoContentList, todoContentList, todoContent]
  );

  const todoDelete = useCallback((uid) => {
    const removeList = todoContentList.filter((item) => {
      return item.id !== uid;
    });
    setTodoContentList(removeList);
  });

  const todoComplete = useCallback((uid) => {
    const completeList = todoContentList.map((item) => {
      if (item.id === uid) {
        // 완료 버튼을 클릭했을 때
        // 완료 일자, 시각이 세팅되어 있으면 clear, 그렇지 않으면 다시 세팅
        item.e_date = item.e_date ? "" : moment().format("YYYY[-]MM[-]DD");
        item.e_time = item.e_time ? "" : moment().format("HH:mm:ss");
      }
      return item;
    });
    setTodoContentList(completeList);
  });

  const todoEditor = (uid) => {
    // filter, map, forEach 등을 배열 요소와 함께 처리하면
    // 결과가 한개뿐이더라도 요소가 한 개인 배열을 반환한다.
    const editorList = todoContentList.filter((item) => {
      return item.id === uid;
    });
    // 얕은 복사
    // **객체의 성질
    // 만약 어디선가 todoContentList 의 요소 중에 값이 변경되면
    // todoContent 데이터도 같이 변경되어버린다.
    // setTodoContent(editorList[0])

    // 깊은 복사
    // 객체 요소를 하나씩 추출하여 따로 복사한다.
    // state 변수들이 객체, 배열로 되어있을 때는 상당히 주의를 요한다.
    setTodoContent({ ...editorList[0] });
  };

  return (
    <div className="Todo">
      <TodoInput
        todoInsert={todoInsert}
        todoContent={todoContent}
        setTodoContent={setTodoContent}
      />
      <TodoList
        todoContentList={todoContentList}
        todoDelete={todoDelete}
        todoComplete={todoComplete}
        todoEditor={todoEditor}
      />
    </div>
  );
};

export default TodoMain;
