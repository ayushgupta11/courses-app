import { useState, useEffect } from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Courses from './components/Courses';
import Container from '@mui/material/Container';
import { getCourses } from './apis';

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    (async () => {
      if (!courses.length) {
        const data = await getCourses();
        setCourses(data.courses);
      }
    })()
  }, [])

  return (
    <>
      <CssBaseline />
      <div className="App">
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <Courses courses={courses} />
        </Container>
      </div>
    </>
  );
}

export default App;
