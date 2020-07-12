import React, { useContext, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { CoursesContext } from '../../providers/coursesProvider';
import * as CourseActions from "../../actions/courseActions";
import toastr from 'toastr';

function FormComponent({ history, match }) {
  const { state: { course, courses } } = useContext(CoursesContext);

  useEffect(() => {
    let courseId = Number(match.params.id);

    if (courseId) {
      let course = courses.find(
        courseBeingUpdated => courseBeingUpdated.id === courseId
      );

      if (course) {
        CourseActions.getCourseAction(course.id);
      } else {
        CourseActions.resetCourseAction();
        history.replace("/courses");
        toastr.error("Course does not exist");
      }
    } else {
      CourseActions.resetCourseAction();
    }
  }, [courses, history, match.params.id]);

  return (
    <Formik
      initialValues={course}
      validate={ values => {
          let errors = {};

          if (!values.title) {
            errors.title = "Required";
          }
        
          if (!values.category) {
            errors.category = "Required";
          }
        
          if (!values.length) {
            errors.length = "Required";
          }

          return errors;
        }
      }
      onSubmit={(values, actions) => {
        if (course.id) {
          CourseActions
            .updateCourseAction(values)
            .then(() => {
              actions.setSubmitting(false);
              toastr.success("Course has been updated successfully!");
              history.push("/courses");
            })
            .catch(error => {
              actions.setSubmitting(false);
              toastr.error(error);
            });
        } else {
          CourseActions
            .createCourseAction(values)
            .then(() => {
              actions.setSubmitting(false);
              toastr.success("Course has been created successfully!");
              history.push("/courses");
            })
            .catch(error => {
              actions.setSubmitting(false);
              toastr.error(error);
            });
        }
      }}
      render={({ errors, status, touched, isSubmitting }) => (
          <Form>
            <Field
              type="text"
              name="title"
            />
            <ErrorMessage name="title" component="div" />

          <Field
            type="text"
            name="category"
          />
          <ErrorMessage name="category" component="div" />

          <Field
            type="text"
            name="length"
          />
          <ErrorMessage name="length" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    />
  );
}

export default FormComponent;
