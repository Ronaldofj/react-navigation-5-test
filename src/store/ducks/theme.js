// Actions Types

export const Types = {
  CHANGE_THEME: 'theme/CHANGE_THEME'
};


// Reducer

const initialState = {
  theme: 'default'
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case Types.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload.theme
      };

    default:
      return state;
  }
}

// Actions Creators

export const changeTheme = (value) => {
  return {
    type: Types.CHANGE_THEME,
    payload: {
      theme: value,
    },
  };
}

export default reducer;