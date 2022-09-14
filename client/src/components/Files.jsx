import React, { useState, useEffect } from 'react';
import { downloadFile, getFiles } from '../apis';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider } from '@mui/material';

export default function Files({
    topic
}) {
    const handleClick = async ({ type, fileName }) => {
        try {
            const response = await downloadFile(type, fileName);
            console.log(response);
        }
        catch (err) {
            console.log(err);
        }
    }
    const [files, setFiles] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await getFiles(topic._id);
            setFiles(data.files.length ? data.files : [topic]);
        })()
    }, [])
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {
                files.map((file, index) => (
                    <>
                        <ListItem alignItems="flex-start" key={file._id} style={{ cursor: 'pointer' }} onClick={() => handleClick(file)}>
                            <ListItemAvatar>
                                <Avatar aria-label="recipe">
                                    {file.name[0]}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={file.name}
                            />
                        </ListItem>
                        {
                            index !== files.length - 1 ?
                                <Divider variant="inset" component="li" />
                                : null
                        }
                    </>

                ))}
        </List>
    )
}
