import React from "react";
import useAuth from "../hooks/UseAuth";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job Has been added.",
            showConfirmButton: false,
            timer: 1500,
          });
          // Navigate("/myPostedJobs");
        }
      });
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Post a New Job
        </h2>
        <form onSubmit={handleAddJob} className="grid gap-6">
          {/* Job Title */}
          <div>
            <label className="block text-lg font-medium mb-2">Job Title</label>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Job Location */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Job Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Job Location"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-lg font-medium mb-2">Job Type</label>
            <select
              name="jobType"
              className="select select-bordered w-full"
              required
            >
              <option disabled>Pick a Job type</option>
              <option>Full-time</option>
              <option>Intern</option>
              <option>Part-time</option>
            </select>
          </div>

          {/* Job Field */}
          <div>
            <label className="block text-lg font-medium mb-2">Job Field</label>
            <select
              name="jobField"
              className="select select-bordered w-full"
              required
            >
              <option disabled>Pick a Job Field</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </div>

          {/* Salary Range */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-lg font-medium mb-2">
                Min Salary
              </label>
              <input
                type="text"
                name="min"
                placeholder="Min"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">
                Max Salary
              </label>
              <input
                type="text"
                name="max"
                placeholder="Max"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Currency</label>
              <select
                name="currency"
                className="select select-bordered w-full"
                required
              >
                <option disabled>Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
          </div>

          {/* Job Description */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Job Description
            </label>
            <textarea
              name="description"
              placeholder="Job Description"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Job Requirements */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Job Requirements
            </label>
            <textarea
              name="requirements"
              placeholder="List each requirement on a new line"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* Job Responsibilities */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Job Responsibilities
            </label>
            <textarea
              name="responsibilities"
              placeholder="List each responsibility on a new line"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* HR Details */}
          <div>
            <label className="block text-lg font-medium mb-2">HR Name</label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">HR Email</label>
            <input
              type="email"
              name="hr_email"
              defaultValue={user?.email}
              placeholder="HR Email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Application Deadline */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Application Deadline
            </label>
            <input
              type="date"
              name="applicationDeadline"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Company Logo */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Company Logo URL
            </label>
            <input
              type="text"
              name="company_logo"
              placeholder="Company Logo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button className="btn btn-primary w-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
