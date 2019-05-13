export default function reducer(state, action) {
  switch (action.type) {
    case 'tab':
      return {tab: action.payload};
    default:
      throw new Error();
  }
}