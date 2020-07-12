import * as ActionType from "../actions/actionTypes";
import initialState from "./initialState";
import _ from "lodash";

const coursesReducer = (state = initialState.coursesReducer, action) => {
  switch (action.type) {
    case ActionType.GET_COURSE: {
      return {
        ...state,
        course: _.assign(
          state.courses.find(course => course.id === action.courseId)
        )
      };
    }
    case ActionType.RESET_COURSE: {
      return {
        ...state,
        course: {}
      };
    }
    case ActionType.GET_COURSES: {
      return {
        ...state,
        courses: _.assign([]),
        loading: true,
        error: false
      };
    }
    case ActionType.GET_COURSES_SUCCESS: {
      return {
        ...state,
        courses: _.assign(action.courses),
        loading: false,
        error: false
      };
    }
    case ActionType.GET_COURSES_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
        courses: _.assign([])
      };
    }
    case ActionType.DELETE_COURSE: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case ActionType.DELETE_COURSE_SUCCESS: {
      let updatedCourses = _.assign(
        state.courses.filter(course => course.id !== action.courseId)
      );

      return {
        ...state,
        loading: false,
        error: false,
        courses: updatedCourses
      };
    }
    case ActionType.DELETE_COURSE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    case ActionType.CREATE_COURSE: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case ActionType.CREATE_COURSE_SUCCESS: {
      let updatedCourses = _.assign(state.courses);
      updatedCourses.push(action.course);

      return {
        ...state,
        courses: _.assign(updatedCourses),
        loading: false,
        error: false
      };
    }
    case ActionType.CREATE_COURSE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    case ActionType.UPDATE_COURSE: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case ActionType.UPDATE_COURSE_SUCCESS: {
      let updatedCourses = _.assign(state.courses);
      const existingCourseIndex = updatedCourses.findIndex(
        course => course.id === action.course.id
      );
      updatedCourses.splice(existingCourseIndex, 1, action.course);

      return {
        ...state,
        courses: _.assign(updatedCourses),
        loading: false,
        error: false
      };
    }
    case ActionType.UPDATE_COURSE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    default: {
      return state;
    }
  }
};

export default coursesReducer;
