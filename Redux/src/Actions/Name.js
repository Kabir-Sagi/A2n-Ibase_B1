import myStore from "../ReduxStore/Mystore";

const nameAction = (nameData) => {
  //   alert(nameData);
  myStore.dispatch({
    type: "NAME",
    payload: nameData,
  });
};

export default nameAction;
