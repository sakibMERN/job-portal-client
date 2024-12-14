import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {
    applicationDeadline,
    category,
    company,
    company_logo,
    description,
    hr_email,
    hr_name,
    jobType,
    location,
    requirements,
    responsibilities,
    salaryRange,
    status,
    title,
    _id
  } = useLoaderData();
  // console.log(singleJob);
  return (
    <div className="bg-slate-600 min-h-screen px-4 md:px-8 py-8">
    {/* Header Section */}
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-6">
          <img
            src={company_logo}
            alt="Company Logo"
            className="h-20 w-20 rounded-lg object-cover shadow"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <p className="text-gray-700 text-sm">
              <strong>Company:</strong> {company}
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Location:</strong> {location}
            </p>
          </div>
        </div>
        <p
          className={`mt-4 md:mt-0 ${
            status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          } px-4 py-1 rounded-full font-semibold text-sm shadow`}
        >
          {status}
        </p>
      </div>
    </div>

    {/* Main Content */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-6">
        {/* Job Description */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>

        {/* Responsibilities */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Responsibilities</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            {responsibilities?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            {requirements?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        {/* Job Details */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Job Details</h2>
          <p className="text-gray-700">
            <strong>Category:</strong> {category}
          </p>
          <p className="text-gray-700">
            <strong>Job Type:</strong> {jobType}
          </p>
          <p className="text-gray-700">
            <strong>Salary Range:</strong>{" "}
            {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </p>
          <p className="text-gray-700">
            <strong>Application Deadline:</strong> {applicationDeadline}
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700">
            <strong>HR Name:</strong> {hr_name}
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> {hr_email}
          </p>
        </div>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex justify-center gap-4 mt-8">
      <Link to={`/jobApply/${_id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg font-medium transition duration-200">
        Apply Now
      </Link>
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-lg font-medium transition duration-200">
        Save Job
      </button>
    </div>
  </div>
  );
};

export default JobDetails;
