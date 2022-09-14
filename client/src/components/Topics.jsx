import React, { useState, useEffect } from 'react';
import { getTopics, downloadFile } from '../apis';
import { useParams } from 'react-router-dom';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider } from '@mui/material';

export default function Subject() {
    const { id, subjectName } = useParams();
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await getTopics(id);
            setTopics(data.topics);
        })()
    }, [])
    const handleClick = async ({ type, fileName }) => {
        try {
            const response = await downloadFile(type, fileName);
            console.log(response);
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
            <List sx={{ width: '80%', bgcolor: 'background.paper' }}>
                {
                    topics.map((topic, index) => (
                        <>
                            <ListItem alignItems="flex-start" key={topic._id} style={{ cursor: 'pointer' }} onClick={() => handleClick(topic.name, topic._id)}>
                                <ListItemAvatar>
                                    <Avatar aria-label="recipe">
                                        {topic.name[0]}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={topic.name}
                                />
                            </ListItem>
                            {
                                index !== topics.length - 1 ?
                                    <Divider variant="inset" component="li" />
                                    : null
                            }
                        </>
                    ))
                }
            </List>
        </div>
    )
}
