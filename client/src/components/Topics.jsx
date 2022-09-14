import React, { useState, useEffect } from 'react';
import { getTopics } from '../apis';
import { useParams } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import Files from './Files';

export default function Subject() {
    const { id } = useParams();
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await getTopics(id);
            setTopics(data.topics);
        })()
    }, [])
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30, flexDirection: 'column', alignItems: 'center' }}>
            {
                topics.map((topic, index) => (
                    <Accordion style={{ width: '90%' }}>
                        <AccordionSummary
                            style={{ height: 60 }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{topic.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Files topic={topic} />
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </div>
    )
}
