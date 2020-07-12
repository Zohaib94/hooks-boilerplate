import React, { useContext, useEffect } from 'react';
import { CoursesContext } from '../../providers/coursesProvider';
import ReactTable from 'react-table';
import * as CourseActions from "../../actions/courseActions";
import toastr from 'toastr';

function IndexComponent({ history }) {
  const { state: { courses } } = useContext(CoursesContext);

  useEffect(() => {
    CourseActions.getCoursesAction().catch(error => {
      toastr.error(error);
    });
  }, [])

  const handleEditButton = (courseId) => {
    CourseActions.getCourseAction(courseId);
    history.push(`/courses/${courseId}`);
  }

  const handleDeleteButton = (courseId) => {
    CourseActions.deleteCourseAction(courseId)
      .then(() => {
        toastr.success("Course has been deleted successfully!");
      })
      .catch(error => {
        toastr.error(error);
      });
  }

  const columns = [{
    Header: 'ID',
    accessor: 'id'
  }, {
    Header: 'Title',
    accessor: 'title',
  }, {
    Header: 'Category',
    accessor: 'category'
  }, {
    Header: 'Actions',
    Cell: row =>
      <>
        <div>
          <button
            className="btn btn-warning mr-2"
            onClick={() => handleEditButton(row.original.id)}
          >
            <i className="fa fa-pencil" aria-hidden="true" /> Edit
          </button>

          <button
            className="btn btn-danger"
            onClick={() => handleDeleteButton(row.original.id)}
          >
            <i className="fa fa-trash" aria-hidden="true" /> Delete
          </button>
        </div>
      </>
  }]

  return (
    <ReactTable
      data={courses}
      columns={columns}
    />
  );
}

export default IndexComponent;
