import data from "../InitialValue";

const myReducer = (state = data, action) => {
  //   alert("myReducer is called");
  switch (action.type) {
    case "NAME":
      state = {
        ...state, //   name: "",
        //  city: "",
        name: action.payload,
      };
      break;
    case "USERS":
      state = {
        ...state,
        users: action.payload,
      };
  }
  return state;
};

export default myReducer;
