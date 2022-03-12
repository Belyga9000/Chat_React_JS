import { onValue, set } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from "react-redux"
import { logout, profileNameRef } from '../../services/firebase';
import { changeUserName } from '../../store/profile/actions';
import { selectUserName } from '../../store/profile/selectors';
import { ConnectedProfile } from './ConnectedProfile';

export const ConnectedProfileContainer = () => {
  const dispatch = useDispatch();
  //const [newName,setNewName] = useState("")
  const [oldName,setOldName] = useState("")
  
  const handleChangeName = () => {
    dispatch(changeUserName(oldName))
    //set(profileNameRef, newName)
  }

  useEffect(() => {
    const unsubscribeName = onValue(profileNameRef, (snapshot) => {
      setOldName(snapshot.val())
    });
    return () => {
      unsubscribeName();
    } 
  },[])

  const userName = useSelector(selectUserName);
  
  const handleUserNameChange = (e) => {
    setOldName(e.target.value)
  }

  const handleLogOut = async() => {
    try {
      await logout();
    } catch(e) {
      console.warn(e)
    }
  }

  return (
    <ConnectedProfile 
    handleUserNameChange={handleUserNameChange}
    handleLogOut={handleLogOut}
    handleChangeName={handleChangeName}
    oldName={userName} />
  )
};
