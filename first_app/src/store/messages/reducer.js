import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";
import { ADD_MESSAGE } from "./actions"
const initialState = {};
  
export const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            return {...state,
                [action.payload.chatId]: [
                    ...state[action.payload.chatId],
                    action.payload.message,
                ],
        };
    }
        case ADD_CHAT: {
            return {
                ...state,
                [action.payload.id]: [],
            };
        }
        case DELETE_CHAT: {
            const newMsgs = {...state}
            delete newMsgs[action.payload];
            return newMsgs
            }
        default:
            return state;
    }
}
  
//   export const messagesReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case ADD_MESSAGE: {
//         const currentList = state.messageList[action.chatId] || [];
//         return {
//           ...state,
//           messageList: {
//             ...state.messageList,
//             [action.chatId]: [
//               ...currentList,
//               {
//                 ...action.message,
//                 id: `${action.chatId}${currentList.length}`,
//               },
//             ],
//           },
//         };
//       }
//       default:
//         return state;
//     }
//   };
