const defaultState = {
  savedPosts: []
}

export const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      const savedPosts = [...state.savedPosts, action.payload]

      return { ...state, savedPosts }
    case 'REMOVE_POST':
      const filtered = state.savedPosts.filter(
        (item) => item.id != action.payload.id
      )
      return { ...state, savedPosts: filtered }
    default:
      return state
  }
}
