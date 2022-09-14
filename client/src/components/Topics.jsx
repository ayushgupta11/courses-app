import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { getTopics, downloadFile } from '../apis';
import { useParams } from 'react-router-dom';
import bgImage from '../bg.JPG';

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
        <div style={{ height: '100%', backgroundImage: bgImage }}>
            <h3 style={{ textAlign: 'center' }}>Subject: {subjectName}</h3>
            <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: 20, background: bgImage }} sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {
                    topics.map((topic) => (
                        <Card key={topic._id} sx={{ maxWidth: 345 }} style={{ margin: 20, cursor: 'pointer' }} onClick={() => handleClick(topic)}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {topic.name[0]}
                                    </Avatar>
                                }
                                title={topic.name}
                                subheader="Topic"
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
