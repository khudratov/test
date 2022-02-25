const defaultState = {
  email: '',
  password: ''
}

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.payload }
    case 'LOGOUT':
      return { ...state, email: '', password: '' }
    default:
      return state
  }
}
