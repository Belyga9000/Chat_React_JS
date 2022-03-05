import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Alert, Button, CircularProgress } from '@mui/material';


export const Users = ({ users, isLoading, getUsers, error }) => {

  return (<List><h2>Users</h2>
        <Button variant="contained" onClick={getUsers}>refresh</Button>
        {error && (<Alert severity="error">Error: {error}</Alert>)}
            { isLoading ? (<CircularProgress />) 
            : (users.map((user)=> {

            const {avatar_url, id, login } = user;

            return (<ListItem key={id}>
                 <ListItemAvatar>
                <Avatar
                  alt={login}
                  src={avatar_url} />
              </ListItemAvatar>
              <ListItemText id={id} primary={login} />
                   </ListItem>)
            }))
           } 
           </List>)
        }

