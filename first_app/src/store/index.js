import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer } from "./profile/reducer";
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { chatsReducer } from "./chats/reducer"
import { messagesReducer } from "./messages/reducer"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
});

const persistConfig = {
    key: "root",
    storage,
}

const persistedtReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedtReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);