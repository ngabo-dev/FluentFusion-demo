import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TopBanner from "./TopBanner.js";
import CoursesGrid from "./CoursesGrid";
import CourseTopic from "./CourseTopic.js";


const courses = [
  { id: 1, title: 'Kinyarwanda for Beginners', progress: 25, lessons: 10 },
  { id: 2, title: 'English Course', progress: 45, lessons: 20 },
  { id: 3, title: 'Kinyarwanda vocabulary', progress: 30, lessons: 12 },
  { id: 4, title: 'Illustrator Course', progress: 90, lessons: 25 },
];

const CoursesDashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-container">
          <TopBanner />
          <CourseTopic />
        </div>
        <CoursesGrid  courses={courses}/>
      </div>
    </div>
  );
};

export default CoursesDashboard;