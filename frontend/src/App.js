import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskForm from '../src/component/TaskForm.js'
import Layout from './component/Layout.js';
import Message from './component/Message.js';
import UpdateTask from './component/UpdateTask.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/todo" element={<TaskForm />} />
        <Route path='/success' element={<Message />} />
        <Route path='/' element={<UpdateTask />} />
      </Routes>
    </Router>
  );
}

export default App;
