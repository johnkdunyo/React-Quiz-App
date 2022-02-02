import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Container , Box } from "@mui/material";



//import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Settings from './pages/Settings';
import FinalScore from './pages/FinalScore';



function App() {
  return (
    <Router>
      <Container maxWidth='sm'>
        <Box textAlign='center' mt={5}>
        <Routes>
          <Route index element={<Settings />} />
          <Route path="/settings"  element={<Settings />} />
          <Route path='/questions' element={<Questions /> } />
          <Route path='/score' element={<FinalScore />}  />
        </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
