import React from 'react';
import './modal.css';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];

interface SimpleDialogProps  {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

const SimpleDialog = (props: SimpleDialogProps) => {
    const {onClose, selectedValue, open} = props;
    const handleClose = () => {
        onClose(selectedValue);
    }

    const handleListItemClick = (value:string) => {
        onClose(value);
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Set backup account</DialogTitle>
            <List sx={{ pt: 0 }}>
                {emails.map((email) => (
                    <ListItem button onClick={() => handleListItemClick(email)} key={email}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={email} />
                    </ListItem>
                ))}
                <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
                    <ListItemAvatar>
                        <Avatar>
                            
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Add account" />
                </ListItem>
            </List>
        </Dialog>
    )
}



/**
 * Primary UI component for user interaction
 */
export const Modal = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <Typography variant="subtitle1" component="div">
                Selected: {selectedValue}
            </Typography>
            <br />
            <Button variant="outlined" onClick={handleClickOpen}>
                Open simple dialog
            </Button>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
  );
}