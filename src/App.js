import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { CoursesProvider } from './providers/coursesProvider';

import CourseIndexComponent from './components/courses/indexComponent';
import CourseFormComponent from './components/courses/formComponent';
import AboutComponent from './components/static/aboutComponent';
import NotFoundComponent from './components/static/notFoundComponent';
import NavComponent from './components/static/navComponent';

import './App.css';

function App() {
  return (
    <CoursesProvider>
      <BrowserRouter>
        <NavComponent />
        <Switch>
          <Route exact path="/" component={CourseIndexComponent} />
          <Route exact path="/courses" component={CourseIndexComponent} />
          <Route exact path="/courses/new" component={CourseFormComponent} />
          <Route exact path="/courses/:id" component={CourseFormComponent} />
          <Route exact path="/about" component={AboutComponent} />
          <Route component={NotFoundComponent} />
        </Switch>
      </BrowserRouter>
    </CoursesProvider>
  );
}

export default App;
