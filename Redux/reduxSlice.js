// Redux Slice
const { configureStore, createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

// Store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
console.log("oncreate store: ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

//dispath
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 39 }));
