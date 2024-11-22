import React from "react";

const CourseCard = ({ title, progress, lessons }) => (
    <div className="card">
        <div className="card-body">
            <h5>{title}</h5>
            <p>{progress}% Complete</p>
            <progress value={progress} max="100"></progress>
            <p>{lessons} lessons</p>
        </div>
    </div>
);

const CoursesGrid = ({ courses = [] }) => {
    return (
        <div className="courses-grid">
            {courses.length > 0 ? (
                courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        title={course.title}
                        progress={course.progress}
                        lessons={course.lessons}
                    />
                ))
            ) : (
                <p>No courses available</p>
            )}
        </div>
    );
};

export default CoursesGrid;