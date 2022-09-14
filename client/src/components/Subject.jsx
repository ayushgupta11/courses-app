import React, { useState, useEffect } from 'react';
import { getSubjects } from '../apis';
import { useNavigate, useParams } from 'react-router-dom';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider } from '@mui/material';

export default function Subject() {
    const navigate = useNavigate();
    const { id, courseName } = useParams();
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await getSubjects(id);
            setSubjects(data.subjects);
        })()
    }, [])
    const handleOpen = (name, id) => {
        navigate(`/topics/${courseName}/${name}/${id}`);
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
            <List sx={{ width: '80%', bgcolor: 'background.paper' }}>
                {
                    subjects.map((subject, index) => (
                        <>
                            <ListItem alignItems="flex-start" key={subject._id} style={{ cursor: 'pointer' }} onClick={() => handleOpen(subject.name, subject._id)}>
                                <ListItemAvatar>
                                    <Avatar aria-label="recipe">
                                        {subject.name[0]}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={subject.name}
                                />
                            </ListItem>
                            {
                                index !== subjects.length - 1 ?
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
