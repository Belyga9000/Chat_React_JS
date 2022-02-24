import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { changeCheckboxState } from '../../store/profile/actions';

export const Profile = () => {
  const dispatch = useDispatch();
  const handleChangeCheckboxState = () => {
    dispatch(changeCheckboxState)
  }
  return (
    <>
      <h3>Profile</h3>
      <div>
        <input type="checkbox" name="option1" onChange={handleChangeCheckboxState}></input>
        <label>option</label>
      </div>
    </>
  )
};
