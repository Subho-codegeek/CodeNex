import React from "react";

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses : [
        {
          name: "Python",
          source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        },
        {
          name: "Data Structures and Algorithms",
          source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/thealgorithms/thealgorithms-original.svg"
        },
        {
          name:"JavaScript",
          source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        },
      ],
    };
  }

  // Event handlers go here

  render() {
    const { courses } = this.state;

    return (
        <div className="analyse">
                {courses.map((course, index) => (
                    <div className="sales">
                    <div key={index} className="status">
                        <div className="info">
                        <h1>{course.name}</h1>
                        </div>
                        <div className="progresss">
                            <img src={course.source}/>
                        </div>
                    </div>
                    </div>
                ))}
        </div>
    );
  }
}

export default Courses;
