import { useCallback } from 'react'

export const DeleteChat = ({ id, onClick }) => {
    const handleClick = useCallback(() => {
        onClick(id)
    },[onClick, id]);
    
  return <button onClick={handleClick}>x</button>   
}
