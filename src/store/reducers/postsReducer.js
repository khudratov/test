const defaultState = {
  savedPosts: []
}

export const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      let posts = [...state.savedPosts, payload]

      return { ...state, posts }
    case 'REMOVE_POST':
      let filtered = state.savedPosts.filter((item) => item.id != payload.id)
      return { ...state, filtered }
    default:
      return state
  }
}
