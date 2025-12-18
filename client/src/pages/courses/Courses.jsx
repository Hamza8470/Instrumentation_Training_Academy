import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../../store/slices/courseSlice';
import './Courses.css';

const Courses = () => {
  const dispatch = useDispatch();
  const { courses, isLoading } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  if (isLoading) {
    return <div className="loader-container">Loading...</div>;
  }

  return (
    <div className="courses-page">
      <div className="container">
        <h1>Available Courses</h1>
        
        <div className="courses-grid">
          {courses && courses.length > 0 ? (
            courses.map((course) => (
              <div key={course._id} className="card course-card">
                <img
                  src={course.thumbnail || '/default-course.jpg'}
                  alt={course.title}
                  className="course-image"
                />
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.shortDescription}</p>
                  <div className="course-meta">
                    <span className="course-category">{course.category}</span>
                  </div>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            ))
          ) : (
            <p>No courses available yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
