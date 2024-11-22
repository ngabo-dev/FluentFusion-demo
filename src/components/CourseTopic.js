import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../chartSetup';

function CourseTopic() {
  const [courseData] = useState({
    labels: ['Kinyarwanda', 'Kiswahili', 'French', 'English'],
    datasets: [
      {
        label: 'Course Topics',
        data: [1, 1, 1, 1], // Replace with actual data
        backgroundColor: ['blue', 'green', 'purple', 'black'],
      },
    ],
  });

  return (
    <div className="course-topic">
      <h2>Course Topic</h2>
      <select>
        <option>This Week</option>
        <option>This Month</option>
        <option>This Year</option>
      </select>
      {/* Set a smaller container size for the chart */}
      <div className="chart-container">
        <Doughnut data={courseData} />
      </div>
      <div className="legend">
        {courseData.labels.map((label, index) => (
          <div className="legend-item" key={index}>
            <span
              className="color-box"
              style={{ backgroundColor: courseData.datasets[0].backgroundColor[index] }}
            />
            {label}
          </div>
        ))}
      </div>
      <p>Total: {courseData.datasets[0].data.reduce((a, b) => a + b, 0)}</p>
    </div>
  );
}

export default CourseTopic;