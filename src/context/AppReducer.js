export default (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
        totalItems: state.items.length,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    // case "EDIT_ITEM":
    //   const updatedItem = action.payload;

    //   const updatedItems = state.items.map((item) => {
    //     if (item.id === updatedItem.id) {
    //       return updatedItems;
    //     }
    //     return items;
    //   });
    default:
      return state;
  }
};
