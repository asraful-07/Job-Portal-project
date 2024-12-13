import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const data = useLoaderData();

  if (!data) {
    return <p>Loading job details...</p>;
  }

  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    requirements,
    responsibilities,
    company,
    hr_email,
    hr_name,
    company_logo,
  } = data;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        {company_logo && (
          <img
            src={company_logo}
            alt={`${company} logo`}
            className="w-16 h-16 rounded-full mr-4"
          />
        )}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>

      <div className="mb-6">
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
          {new Date(applicationDeadline).toLocaleDateString()}
        </p>
        <p className="text-gray-600">
          <strong>Salary:</strong> {salaryRange?.min} - {salaryRange?.max}{" "}
          {salaryRange?.currency?.toUpperCase()}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Description:</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Requirements:</h2>
        <ul className="list-disc ml-5 text-gray-600">
          {requirements?.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Responsibilities:
        </h2>
        <ul className="list-disc ml-5 text-gray-600">
          {responsibilities?.map((res, idx) => (
            <li key={idx}>{res}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Contact:</h2>
        <p className="text-gray-600">
          <strong>HR Name:</strong> {hr_name}
        </p>
        <p className="text-gray-600">
          <strong>HR Email:</strong> {hr_email}
        </p>
      </div>
      <Link to={`/jobApply/${_id}`}>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-600 transition duration-300">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default JobDetails;
