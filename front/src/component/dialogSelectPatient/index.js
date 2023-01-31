import React from 'react';
import { Dialog, DialogTitle, DialogContent, List, ListItem } from '@material-ui/core';

export const DialogSelectPatient = ({ open }) => {
    return (
        <Dialog open={open}>
            <DialogTitle>
                Выбор пациента
            </DialogTitle>
            <DialogContent>
                Обратите внимание, что дальнейшие действия будут производиться от имени выбранного пациента
            </DialogContent>
            <List>
                <ListItem>1</ListItem>
                <ListItem>2</ListItem>
            </List>
        </Dialog>
    )
}