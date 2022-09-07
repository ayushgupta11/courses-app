import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Subjects from './Subjects';

export default function Courses({
    courses
}) {
    const [open, setOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const handleClose = () => {
        setOpen(false);
        setSelectedCourse(null);
    }
    const handleOpen = (id) => {
        setOpen(true);
        setSelectedCourse(id);
    }
    return (
        <>
            <Subjects open={open} handleClose={handleClose} selectedCourse={selectedCourse} />
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {
                    courses.map((course) => (
                        <Card key={course._id} sx={{ maxWidth: 345 }} style={{ margin: 20, cursor: 'pointer' }} onClick={() => handleOpen(course._id)}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {course.name[0]}
                                    </Avatar>
                                }
                                title={course.name}
                                subheader="September 14, 2016"
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
        </>
    )
}
