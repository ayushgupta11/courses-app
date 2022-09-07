import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { getSubjects, getTopics, downloadFile } from '../apis';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Subjects({
    open,
    handleClose,
    selectedCourse
}) {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        if (open) {
            (async () => {
                const data = await getSubjects(selectedCourse);
                setSubjects(data.subjects);
            })()
        }
    }, [open])

    return (
        <Drawer
            anchor={'right'}
            open={open}
            onClose={handleClose}
        >
            <Box
                sx={{ width: '40vw' }}
                role="presentation"
            >
                <List>
                    {subjects.map((subject) => (
                        <ListItem key={subject._id} disablePadding>
                            <SubjectItem subject={subject} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

const SubjectItem = ({
    subject
}) => {
    return (
        <Accordion style={{ width: '100%' }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{subject.name}</Typography>
            </AccordionSummary>
            {
                subject.hasChapters ?
                    subject.chapters.map((chapter) => (
                        <SubjectItem key={chapter._id} subject={chapter} />
                    ))
                    : <Chapter chapter={subject} />
            }
        </Accordion>
    )
}

const Chapter = ({
    chapter
}) => {
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        if (chapter) {
            (async () => {
                const data = await getTopics(chapter._id);
                setTopics(data.topics);
            })()
        }
    }, [chapter])

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
        <AccordionDetails>
            <Typography>
                <List>
                    {
                        topics.map((topic) => (
                            <ListItem key={topic._id} disablePadding style={{ cursor: 'pointer' }} onClick={() => handleClick(topic)}>
                                {topic.name}
                            </ListItem>
                        ))
                    }
                </List>
            </Typography>
        </AccordionDetails>
    )
}
