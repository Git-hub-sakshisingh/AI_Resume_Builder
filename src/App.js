import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Both from './components/Both';
import Home from './components/Home';
import Firstpage from './components/Firstpage';
import Suggestions from './components/Suggestion';
import Faq from './components/Faq';
import UploadPage from './components/UploadPage';
import Templates from './components/Templates';
import { useState } from 'react';
import AfterNo from './components/AfterNo'
import Output from './components/Output';
import TemplateNo from './components/TemplateNo';
import WithoutAi from './components/withoutAi';
import FirstWithoutAi from './components/FirstWithoutAi';
import WithoutAiTemp from './components/WithoutAiTemp';
import UploadPage2 from './components/UploadPage2';
import Edit_3 from './components/Edit_3';
import Login from './components/Login';
import Signup from './components/Signup';




function App() {
  const [result, setResult] = useState({
    "name": "John Doe",
    "position": "Software Engineer",
    "skills": ["JavaScript", "React", "Node.js"]
  });

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/privacy' element={<Both />} />
          <Route exact path='/faq' element={<Faq />} />
          <Route exact path='/suggestion' element={<Suggestions />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup  />} />
          <Route exact path='/suggestion' element={<Suggestions />} />
          <Route exact path='/firstpage' element={<Firstpage />} />
          <Route exact path='/upload' element={<UploadPage />} />
          <Route exact path='/upload2' element={<UploadPage2 />} />
          <Route exact path='/afterno' element={<AfterNo setResult={setResult} />} />
          <Route exact path='/output' element={<Output result={result} />} />
          <Route exact path='/templateno' element={<TemplateNo />} />
          <Route exact path='/templates' element={<Templates />} />
          <Route exact path='/firstwithoutai' element={<FirstWithoutAi />} />
          <Route exact path='/withoutai' element={<WithoutAi />} />
          <Route exact path='/withoutaitemp' element={<WithoutAiTemp />} />
          <Route exact path='/edit' element={<Edit_3 />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
