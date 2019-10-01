export default (state = [], action = {}) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'UPDATE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, ...action.payload };
        }
        return todo;
      })

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id)

    default:
      return state;
  }
}