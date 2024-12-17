import React from "react";

const AddJob = () => {
  const handleAddJob = (e) => {
    e.preventDefault();

    // //Step-1
    // const newFormData = new FormData(e.target);
    // const jsonData = newFormData.entries();
    // const initialData = Object.fromEntries(jsonData);
    // console.log(initialData);

    // let {max, min, deadline, currency, ...newJob} = initialData;
    //  newJob.deadline = new Date(deadline).getTime();
    //  newJob.salaryRange = {
    //   min: Number(max), 
    //   max: Number(min), 
    //   currency
    //  }

    // console.log(newJob);
    

    // Step 2
    const newFormData = new FormData(e.target);

    const initialData = Object.fromEntries(newFormData.entries());

    //convert date to millisecond
    if (initialData.deadline) {
      initialData.deadline = new Date(initialData.deadline).getTime();
      //convert string to number
      if (initialData.max) {
        initialData.max = Number(initialData.max);
        //convert number to string
        if (initialData.min) {
          initialData.min = Number(initialData.min);
        }
      }
    }
    console.log(initialData);

    //Modify object
    const {max, min, currency , ...newJob} = initialData;
    newJob.requirement = newJob.requirement.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");    
    newJob.salaryRange = {
      min,
      max, 
      currency
    }

    console.log(newJob);
  };
  return (
    <div className="border border-blue-900 w-9/12 mx-auto">
      <div className="bg-blue-900 h-36 p-5 flex items-center justify-center gap-2">
        <div className="border-2 border-red-600 h-10"></div>
        <h2 className="text-3xl text-center font-bold text-white">
          Post a new job
        </h2>
      </div>
      <form onSubmit={handleAddJob} className="card-body space-y-5">
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input input-bordered"
            required
          />
        </div>

        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* Job Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Job Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Job Location"
            className="input input-bordered"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          {/* Job Type */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text font-semibold">Job Type</span>
            </label>
            <select name="job_type" className="select select-bordered" required>
              <option disabled selected>
                Pick a job type
              </option>
              <option>Full Time</option>
              <option>Harry Potter</option>
              <option>Intern</option>
              <option>Remote</option>
              <option>On site</option>
              <option>Hybrid</option>
            </select>
          </div>

          {/* Job field */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text font-semibold">Job Field</span>
            </label>
            <select
              name="job_field"
              className="select select-bordered"
              required
            >
              <option disabled selected>
                Pick a job Field
              </option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Teaching</option>
              <option>Finance</option>
              <option>IT</option>
            </select>
          </div>
        </div>

        {/* Job Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Job Requirements</span>
          </label>
          <textarea
            className="textarea textarea-accent w-full h-24"
            name="requirement"
            placeholder="Write each requirement in a new line"
            required
          ></textarea>
        </div>

        {/* Salary range */}
        <div className="border rounded-lg p-4 space-y-2">
          <p className="font-semibold">Salary Range</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* min amount */}
            <div className="form-control">
              <input
                type="text"
                name="min"
                placeholder="Min"
                className="input input-bordered"
                required
              />
            </div>

            {/* max amount */}
            <div className="form-control">
              <input
                type="text"
                name="max"
                placeholder="Max"
                className="input input-bordered"
                required
              />
            </div>

            {/* Currency */}
            <div className="form-control">
              <select
                name="currency"
                className="select select-bordered"
                required
              >
                <option disabled selected>
                  Pick Currency
                </option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
                <option>EURO</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
              Job Responsibilities
            </span>
          </label>
          <textarea
            className="textarea textarea-accent w-full h-24"
            name="responsibilities"
            placeholder="Put each responsibilities in a new line"
            required
          ></textarea>
        </div>
        {/* Job Description */}
        <div className="space-y-2">
          <p className="font-semibold">Job Description</p>

          <textarea
            className="textarea textarea-accent w-full h-36"
            name="description"
            placeholder="Job Description"
            required
          ></textarea>
        </div>
        <div className="flex gap-5">
          {/* Job Deadline */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text font-semibold">Job Location</span>
            </label>
            <input
              type="date"
              name="deadline"
              placeholder="Application Deadline"
              className="input input-bordered"
              required
            />
          </div>
          {/* Company Logo */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text font-semibold">Company Logo URL</span>
            </label>
            <input
              type="url"
              name="logo_url"
              placeholder="Company Logo URL"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-5">
          {/* HR Name */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text font-semibold">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="Hr Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* HR Email */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text font-semibold">Job Location</span>
            </label>
            <input
              type="email"
              name="hr_email"
              placeholder="HR Email"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline btn-accent font-semibold">
            Make Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
