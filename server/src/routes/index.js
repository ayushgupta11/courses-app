import express from 'express';
import { getCourses } from '../controllers/courses.controller';
import { downloadFile } from '../controllers/download.controller';
import { getSubjects } from '../controllers/subjects.controller';
import { getTopics } from '../controllers/topic.controller';
import { getFiles } from '../controllers/files.controller';

const router = express.Router();

router.get('/courses', getCourses);
router.get('/subjects/:id', getSubjects);
router.get('/topics/:id', getTopics);
router.get('/files/:id', getFiles);
router.post('/download', downloadFile);

export default router;