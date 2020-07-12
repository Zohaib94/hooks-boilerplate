import * as ActionType from "./actionTypes";
import CourseApi from "../api/courseApi";
import { CoursesData } from '../providers/coursesProvider';

export function getCoursesAction() {
  CoursesData.dispatch(getCourses);

  return CourseApi.getAllCourses()
    .then(courses => {
      CoursesData.dispatch(getCoursesSuccess(courses));
    })
    .catch(error => {
      CoursesData.dispatch(getCoursesFailure(error));
      throw error;
    });
}

export function deleteCourseAction(courseId) {
  CoursesData.dispatch(deleteCourse);

  return CourseApi.deleteCourse(courseId)
    .then(() => {
      CoursesData.dispatch(deleteCourseSuccess(courseId));
    })
    .catch(error => {
      CoursesData.dispatch(deleteCourseFailure(error));
      throw error;
    });
}

export function updateCourseAction(course) {
  CoursesData.dispatch(updateCourse);

  return CourseApi.saveCourse(course)
    .then(course => {
      CoursesData.dispatch(updateCourseSuccess(course));
    })
    .catch(error => {
      CoursesData.dispatch(updateCourseFailure(error));
      throw error;
    });
}

export function createCourseAction(course) {
  CoursesData.dispatch(createCourse);

  return CourseApi.saveCourse(course)
    .then(course => {
      CoursesData.dispatch(createCourseSuccess(course));
    })
    .catch(error => {
      CoursesData.dispatch(createCourseFailure(error));
      throw error;
    });
}

export function getCourseAction(courseId, dispatch) {
  CoursesData.dispatch(getCourse(courseId));
}

export function resetCourseAction(dispatch) {
  CoursesData.dispatch(resetCourse);
}

const getCourses = {
  type: ActionType.GET_COURSES
};

const getCoursesSuccess = courses => ({
  type: ActionType.GET_COURSES_SUCCESS,
  courses
});

const getCoursesFailure = error => ({
  type: ActionType.GET_COURSES_FAILURE,
  error
});

const getCourse = courseId => ({
  type: ActionType.GET_COURSE,
  courseId
});

const resetCourse = {
  type: ActionType.RESET_COURSE
};

const createCourse = {
  type: ActionType.CREATE_COURSE
};

const createCourseSuccess = course => ({
  type: ActionType.CREATE_COURSE_SUCCESS,
  course
});

const createCourseFailure = error => ({
  type: ActionType.CREATE_COURSE_FAILURE,
  error
});

const deleteCourse = {
  type: ActionType.DELETE_COURSE
};

const deleteCourseSuccess = courseId => ({
  type: ActionType.DELETE_COURSE_SUCCESS,
  courseId
});

const deleteCourseFailure = error => ({
  type: ActionType.DELETE_COURSE_FAILURE,
  error
});

const updateCourse = {
  type: ActionType.UPDATE_COURSE
};

const updateCourseSuccess = course => ({
  type: ActionType.UPDATE_COURSE_SUCCESS,
  course
});

const updateCourseFailure = error => ({
  type: ActionType.UPDATE_COURSE_FAILURE,
  error
});
