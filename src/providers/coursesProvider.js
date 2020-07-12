import React, { useReducer, createContext } from 'react';
import coursesReducer from '../reducers/coursesReducer';
import initialState from '../reducers/initialState';

const CoursesContext = createContext({});
CoursesContext.displayName = 'CoursesContext';

const CoursesData = {};

function CoursesProvider({children}) {
  const [state, dispatch] = useReducer(coursesReducer, initialState);
  CoursesData.dispatch = dispatch;

  return(
    <CoursesContext.Provider value={{state, dispatch}}>
      {children}
    </CoursesContext.Provider>
  );
}

export { CoursesContext, CoursesProvider, CoursesData }
