import { Button } from '@mui/material';
import { onValue, set } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from "react-redux"
import { logout, profileNameRef } from '../../services/firebase';
import { changeUserName } from '../../store/profile/actions';
import { selectUserName } from '../../store/profile/selectors';

export const ConnectedProfile = () => {
  const dispatch = useDispatch();
  const [name,setName] = useState("")

  const handleChangeName = () => {
    // dispatch(changeUserName(name))
    // setName('')
    set(profileNameRef, name)
  }

  useEffect(() => {
    const unsubscribeName = onValue(profileNameRef, (snapshot) => {
      setName(snapshot.val())
    });
    return () => {
      unsubscribeName();
    } 
  },[])

  const userName = useSelector(selectUserName);
  
  const handleUserNameChange = (e) => {
    setName(e.target.value)
  }

  const handleLogOut = async() => {
    try {
      await logout();
    } catch(e) {
      console.warn(e)
    }
  }

  return (
    <>
      <h3>Profile</h3>
      <h2>User Name: {name}</h2>
      <div>
        <label>New User Name </label>
        <input type="text" onChange={handleUserNameChange}></input>
        <Button variant='outlined' onClick={handleChangeName}>Change Name</Button>
      </div>
      <Button variant='outlined' onClick={handleLogOut}>Logout</Button>
    </>
  )
};
