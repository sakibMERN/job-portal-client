import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, [user.email]);
  return (
    <div className="overflow-x-auto bg-white h-[60vh]">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Company Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {/* {
    "_id": "675e651ed4be1dc9617a4ff2",
    "job_id": "675c672e4c858561a669147d",
    "applicant_email": "rasid@khan.com",
    "linkedIn": "http://localhost:5173/jobApply/675c672e4c858561a669147d",
    "github": "http://localhost:5173/jobApply/675c672e4c858561a669147d",
    "resume": "http://localhost:5173/jobApply/675c672e4c858561a669147d",
    "title": "Mobile App Developer",
    "company": "AppCrafter",
    "company_logo": "https://i.ibb.co/BLVwZzZ/icons8-whatsapp-logo-94.png",
    location
} */}
          {
            jobs.map(job => <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt={job.company}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.title}
                  
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>)
          }
        </tbody>
        
      </table>
    </div>
  );
};

export default MyApplications;
