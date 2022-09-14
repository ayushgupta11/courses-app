import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { Breadcrumbs } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { getCourses } from '../apis';
import { useNavigate, Link } from 'react-router-dom';

export default function Courses() {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const data = await getCourses();
            setCourses(data.courses);
        })()
    }, [])
    const handleOpen = (name, id) => {
        navigate(`/subjects/${name}/${id}`);
    }
    return (
        <div style={{ height: '100%' }}>
            <h3 style={{ textAlign: 'center' }}>Home Page</h3>
            <Box style={{ display: 'flex', height: '100%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: 20 }} sx={{ bgcolor: '#cfe8fc', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {
                    courses.map((course) => (
                        <Card key={course._id} sx={{ maxWidth: 345 }} style={{ margin: 20, cursor: 'pointer' }} onClick={() => handleOpen(course.name, course._id)}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {course.name[0]}
                                    </Avatar>
                                }
                                title={course.name}
                                subheader="Course"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={course.image}
                                alt="Paella dish"
                            />
                        </Card>

                    ))
                }
            </Box>
        </div>
    )
}
