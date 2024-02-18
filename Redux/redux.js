// REDUX => sebuah library untuk mengelola state aplikasi
// npm i redux
// reducer => fungsi yg menentukan bagaimana state aplikasi berubah sebagai respons terhadap aksi tertentu
// const namaReducer = (state, action) => {}

const { legacy_createStore } = require("redux");

const cartReducer = (state = { cart: [{ id: 1, qty: 100 }] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store => seluruh state aplikasi disimpan di satu store
const store = legacy_createStore(cartReducer);
console.log("oncreate store: ", store.getState());

// subscribe => Untuk melihat perubahan yg terjadi
store.subscribe(() => {
  console.log("STORE CHANGE: ", store.getState());
});

// dispatch => yg digunakan untuk mengirim aksi ke store
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } };
store.dispatch(action1);

const action2 = { type: "ADD_TO_CART", payload: { id: 3, qty: 30 } };
store.dispatch(action2);
