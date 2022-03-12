import { Button } from '@mui/material';

export const ConnectedProfile = ({ handleUserNameChange, handleLogOut, handleChangeName, oldName }) => {
  return (
    <>
    <h3>Profile</h3>
    <h2>User Name: {oldName}</h2>
    <div>
      <label>New User Name </label>
      <input type="text" onChange={handleUserNameChange}></input>
      <Button variant='outlined' onClick={handleChangeName}>Change Name</Button>
    </div>
    <Button variant='outlined' onClick={handleLogOut}>Logout</Button>
  </>
  )
}
