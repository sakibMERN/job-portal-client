import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const [myPostedJobs, setMyPostedJobs] = useState([]);
  const { user } = useAuth();
  console.log(myPostedJobs[0]);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyPostedJobs(data);
      });
  }, [user.email]);
  return (
    <div>
      My posted Jobs : {myPostedJobs.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Application Count</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {
                myPostedJobs.map((myJob, index) => <tr>
                    <th>{index + 1}</th>
                    <td>{myJob.title}</td>
                    <td>{new Date(myJob.applicationDeadline).toLocaleDateString()}</td>
                    <td>{myJob.jobApplicant}</td>
                    <td><Link to={`/viewApplications/${myJob._id}`} className="btn btn-link">View Application</Link></td>
                  </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
