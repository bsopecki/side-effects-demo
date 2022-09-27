export const emailReducer = (state, action) => {
  if (action.type === "USER_EMAIL_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "USER_EMAIL_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

export const passwordReducer = (state,action) => {
    if (action.type === "USER_PASSWORD_INPUT") {
        return { value: action.val, isValid: action.val.trim().length >6 };
      }
      if (action.type === "USER_PASSWORD_BLUR") {
        return { value: state.value, isValid: state.value.trim().length >6 };
      }
      return { value: "", isValid: false };
}
