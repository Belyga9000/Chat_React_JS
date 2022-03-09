// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth" 
import { getDatabase, ref } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwS8eZidBJsrRWaxwYMGX4FE1nsAKb8Ls",
  authDomain: "msngr-92bd3.firebaseapp.com",
  projectId: "msngr-92bd3",
  storageBucket: "msngr-92bd3.appspot.com",
  messagingSenderId: "361480363867",
  appId: "1:361480363867:web:75fa8da91e7013fa54847e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);
export const login = (email, pass) => signInWithEmailAndPassword(auth, email, pass);
export const logout = () =>signOut(auth);

export const db = getDatabase(app);
export const profileNameRef = ref(db, 'profile');
export const chatsRef = ref(db, 'chats');
export const getChatsRefById = (chatId) => ref(db, `chats/${chatId}`);

export const messagesRef = ref(db, "messages");
export const getMessageListRefByChatId = (chatId) => 
ref(db, `messages/${chatId}/messageList`)
export const getMessagesRefByChatId = (chatId) =>
ref(db,`messages/${chatId}`)
export const getMessageRefById = (chatId, msgId) => 
ref(db, `messages/${chatId}/messageList/${msgId}`)