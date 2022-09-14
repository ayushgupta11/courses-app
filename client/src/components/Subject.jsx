import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { getSubjects } from '../apis';
import { useNavigate, useParams } from 'react-router-dom';

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
        <div style={{ height: '100%' }}>
            <h3 style={{ textAlign: 'center' }}>Course: {courseName}</h3>
            <Box style={{ display: 'flex', flexWrap: 'wrap' }} sx={{ height: '100%', bgcolor: '#cfe8fc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {
                    subjects.map((subject) => (
                        <Card key={subject._id} sx={{ maxWidth: 345 }} style={{ margin: 20, cursor: 'pointer' }} onClick={() => handleOpen(subject.name, subject._id)}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {subject.name[0]}
                                    </Avatar>
                                }
                                title={subject.name}
                                subheader="Subject"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={'https://www.vemschoolrsg.com/wp-content/uploads/2019/03/subject.jpg'}
                                alt="Paella dish"
                            />
                        </Card>

                    ))
                }
            </Box>
        </div>
    )
}
