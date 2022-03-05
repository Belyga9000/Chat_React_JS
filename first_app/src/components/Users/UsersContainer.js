import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { selectUsersData, selectUsersError, selectUsersIsLoading } from "../../store/users/selectors";
import { getUsersData } from "../../store/users/actions"
import { Users } from "./Users"


export const UsersContainer = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectUsersIsLoading)
    const users = useSelector(selectUsersData)
    const error = useSelector(selectUsersError)
    
    const getUsers = async () => {
        dispatch(getUsersData());
    }

    useEffect(() => {
        getUsers();
    },[])
  return (
    <Users users={users} isLoading={isLoading} error={error} getUsers={getUsers} />
  )
}
