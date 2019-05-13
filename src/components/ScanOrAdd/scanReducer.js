export const init = location =>
  location && location.pathname.includes('/add')
    ? { tab: 1 }
    : { tab: 0 }; // Used to set initial child render.

export default function reducer(state, action) {
  switch (action.type) {
    case 'init':
      return init(action.payload);
    case 'tab':
      return { ...state, tab: action.payload };
    case 'hasVideo':
      return { ...state, hasVideo: action.payload };
    default:
      throw new Error();
  }
}