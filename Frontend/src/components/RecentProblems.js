import React from "react";

class RecentProblems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: [
        {
          name: "Reverse String",
          language: "C++",
          course: "DSA",
          status: "Solved",
          state: "primary",
        },
        {
          name: "Substring",
          language: "Python",
          course: "Python Programming",
          status: "Pending",
          state: "warning",
        },
        {
          name: "Rat and Maze",
          language: "Java",
          course: "Java Advanced",
          status: "Not Solved",
          state: "danger",
        }
      ],
    };
  }

  // Event handlers go here

  render() {
    const { problems } = this.state;

    return (
      <div className="recent-problem">
        <h1>Recent Problems</h1>
        <table>
          <thead>
            <tr>
              <th>Problem Name</th>
              <th>Language</th>
              <th>Course</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem, index) => (
              <tr key={index}>
                <td>{problem.name}</td>
                <td>{problem.language}</td>
                <td>{problem.course}</td>
                <td class={problem.state}>{problem.status}</td>
                <td class='primary'>Details</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="#">Show All</a>
      </div>
    );
  }
}

export default RecentProblems;
