/**
 * props 로 전달받았던 nation, setNation() 함수를 Provider 로부터 전달받기
 */

import { ProContextProvider, useProContext } from "../context/ProContext";
// import { useContext } from "react";

const ProInput = (props) => {
  // useContext() 함수를 사용하여 store 에 보관 중인 nation 과 setNation() 함수를 가져오기
  //   const { nation, setNation } = useContext(ProContextProvider);
  const { nation, setNation, nationList, setNationList } = useProContext();

  const onChangeEventHandler = (e) => {
    setNation(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      setNationList([...nationList, e.target.value]);
    }
  };

  return (
    <>
      <input
        value={nation}
        onKeyDown={onKeyDownHandler}
        onChange={onChangeEventHandler}
      />
    </>
  );
};

export default ProInput;
