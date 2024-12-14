import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
    status
  } = job;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="flex items-center gap-6 p-5">
        <figure>
          <img src={company_logo} className="w-14" alt="Shoes" />
        </figure>
        <div>
          <h3>{company}</h3>
          <p className="flex items-center gap-1"><IoLocationOutline className="opacity-40" />{location}</p>
        </div>
      </div>
      <div className="card-body p-5">
        <h2 className="card-title">{title}
        <div className={`badge ${status === 'active' ? "badge-primary" :  badge-secondary}`}>{status}</div>
        </h2>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2 font-medium">
            {
                requirements.map(skill => <p className="border rounded-lg text-center opacity-80 hover:text-blue-400 hover:opacity-100">{skill}</p>)
            }
        </div>
        <div className="card-actions justify-end items-center mt-2">
            <p className="text-sm">Salary: {salaryRange.min} - {salaryRange.max}{" "} {salaryRange.currency} </p>
          <Link to={`/jobs/${_id}`} className="btn btn-primary ">Apply</Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
