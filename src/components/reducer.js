export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM2") {
      return {
        ...state,
        item: []
      };
    } else if (action.type === "REMOVE_ITEM") {
      return {
        ...state,
        item: state.item.filter((filtered) => filtered.id !== action.payload)
      };
    } else if (action.type === "INCREMENT") {
      const updatedItems = state.item.map((item) => {
        if (item.id === action.payload) {
          // If the item's ID matches the payload, update its quantity
          return { ...item, quantity: item.quantity + 1 }; // Create a new object with updated quantity
        } else {
          // If the item's ID doesn't match, return the item unchanged
          return item;
        }
      });
  
      return { ...state, item: updatedItems }; // Return the updated state with the updated items array
    }
    else if (action.type === "DECREMENT") {
      const updatedItems = state.item.map((item) => {
          if (item.id === action.payload) {
              return {
                  ...item,
                  quantity: item.quantity - 1
              };
          }
          return item;
      }).filter((item) => item.quantity !== 0); // Filter out items with quantity 0
  
      return {
          ...state,
          item: updatedItems
      };
  }

else if (action.type === "QUANTITY") {
  let totalq = state.item.reduce(
    (accum, curVal) => {
      let { quantity } = curVal;
      accum += quantity;
      return accum;
    },0
  );
  let totalam=state.item.reduce((accum,curVal)=>{
    let {price,quantity}=curVal
    accum+=price*quantity
    return accum
  },0)
  return { ...state, totalq,totalam };
}
else if (action.type === "ADD") {
  return {
    ...state,
    item: [...state.item, action.payload]
  };
}


    return state;
  };
  