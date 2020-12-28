// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ResumePage from './pages/ResumePage/ResumePage';
import { GlobalTemplate } from './templates/GlobalTemplate/GlobalTemplate';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <GlobalTemplate exact path="/home" Component={HomePage} />
        <GlobalTemplate exact path="/about" Component={AboutPage} />
        <GlobalTemplate exact path="/resume" Component={ResumePage} />
        <GlobalTemplate exact path="/projects" Component={ProjectsPage} />
        <GlobalTemplate exact path="/contact" Component={ContactPage} />

        <GlobalTemplate exact path="/" Component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
