// REDUX JS TOOLKIT => seperangkat utilitas yang dirancang untuk membuat penggunaan Redux menjadi lebih sederhana dan efisien
// npm i @reduxjs/toolkit
const {
  configureStore,
  createAction,
  createReducer,
} = require("@reduxjs/toolkit");

// State
const addToCart = createAction("ADD_TO_CART");

// Reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("Create_Session");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// Store
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log("oncreate store: ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// Dispath
store.dispatch(login());
store.dispatch(addToCart({ id: 1, qty: 20 }));
