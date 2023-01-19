import { GET_POSTS } from '../type/types';
import { GET_Item_Quantity } from '../type/types';
import { ADD_TO_CARD } from '../type/types';
const initialState = {
  posts: [],
  item_quantity: [],
  ADD_TO_CARD: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case GET_Item_Quantity:
      return {
        ...state,
        item_quantity: payload,
      };
    case ADD_TO_CARD:
      return {
        ...state,
        ADD_TO_CARD: [...state.ADD_TO_CARD, payload],
      };
    default:
      return state;
  }
};

// case CREATE_POST:
//   console.log(payload);
//   return {
//     ...state,
//     posts: [payload, ...state.posts],
//   };
// case GET_POST:
//   return {
//     ...state,
//     post: payload,
//   };
// case UPDATE_POST:
//   return {
//     ...state,
//     posts: state.posts.map((postItem) =>
//       postItem.id == payload.id ? payload : postItem
//     ),
//   };
// case DELETE_POST:
//   return {
//     ...state,
//     posts: state.posts.filter((postItem) => postItem.id != payload),
//   };
