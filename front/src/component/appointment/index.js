import React from 'react';
import { List, ListItem, IconButton, ListItemText } from '@material-ui/core';
import CommentIcon from '@mui/icons-material/Comment';

export const Appointment = () => {
    return (
        <>
            <div>Appointment</div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {[1, 2, 3].map((value) => (
                    <ListItem key={value} >
                        <IconButton>
                            <CommentIcon />
                        </IconButton>
                        <ListItemText primary={`Line item ${value}`} />
                    </ListItem>
                ))}
            </List>
        </>
    )
}