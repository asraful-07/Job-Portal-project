import React, { useEffect, useState } from "react";
import useAuth from "../hooks/UseAuth";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Jobs: {jobs.length}</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
              <th className="border border-gray-300 px-4 py-2">Job Type</th>
              <th className="border border-gray-300 px-4 py-2">Job Field</th>
              <th className="border border-gray-300 px-4 py-2">Company</th>
              <th className="border border-gray-300 px-4 py-2">
                Application Deadline
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border border-gray-300 px-4 py-2">{idx + 1}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.location}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.jobType}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.jobField}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.company}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.applicationDeadline}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs;
