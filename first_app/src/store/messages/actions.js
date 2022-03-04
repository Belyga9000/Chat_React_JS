export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId, 
        message,
    }
});

let timeout;

export const addMessageWithThunk  = (chatId,newMsg) => (dispatch,getState) => {
    dispatch(addMessage(chatId,newMsg));
    if (newMsg?.isBot === false) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const botMsg = {
                author: "Bot",
                text: "hello",
                isBot: true,
                id: `msgId_${Date.now()}`,
              }
              dispatch(addMessage(chatId,botMsg))
        }, 1000);    
    };
}