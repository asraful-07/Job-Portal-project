import React from "react";
import { Link } from "react-router-dom";

const HotCard = ({ job }) => {
  const {
    _id,
    company_logo,
    title = "Job Title Not Available",
    location = "Location Not Available",
    jobType = "Not Specified",
    category = "General",
    applicationDeadline,
    salaryRange = { min: null, max: null, currency: "bdt" },
  } = job || {};

  return (
    <div className="p-4 border rounded shadow-md bg-white hover:shadow-lg transition duration-300">
      {/* Company Logo */}
      {company_logo && (
        <div className="flex justify-center mb-4">
          <img
            src={company_logo}
            alt={`${title} - Company Logo`}
            className="w-16 h-16 object-cover rounded"
          />
        </div>
      )}

      {/* Job Title */}
      <h1 className="text-xl font-bold text-gray-800 mb-2">Hot Job:</h1>
      <h2 className="text-lg font-semibold text-blue-600 mb-2">{title}</h2>

      {/* Job Details */}
      <p className="text-gray-600">
        <strong>Location:</strong> {location}
      </p>
      <p className="text-gray-600">
        <strong>Job Type:</strong> {jobType}
      </p>
      <p className="text-gray-600">
        <strong>Category:</strong> {category}
      </p>
      <p className="text-gray-600">
        <strong>Application Deadline:</strong>{" "}
        {applicationDeadline
          ? new Date(applicationDeadline).toLocaleDateString()
          : "Not Specified"}
      </p>
      <p className="text-gray-600">
        <strong>Salary:</strong>{" "}
        {salaryRange.min && salaryRange.max
          ? `${salaryRange.min} - ${salaryRange.max} ${
              salaryRange.currency?.toUpperCase() || "BDT"
            }`
          : "Not Specified"}
      </p>

      {/* Apply Now Button */}
      <Link to={`/jobs/${_id}`} aria-label={`View job details for ${title}`}>
        <button className="bg-indigo-500 text-white px-4 py-2 my-4 rounded-md shadow hover:bg-indigo-600 transition duration-300">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default HotCard;
