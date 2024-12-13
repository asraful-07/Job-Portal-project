import React, { useEffect, useState } from "react";
import useAuth from "../hooks/UseAuth";

const MyApply = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/applys?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);
  return (
    <div>
      <h1 className="text-2xl font-bold my-4">
        My Applications: {jobs.length}
      </h1>
      <table className="table-auto border-collapse border border-gray-400 w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-400 px-4 py-2">#</th>
            <th className="border border-gray-400 px-4 py-2">Full Name</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Resume</th>
            <th className="border border-gray-400 px-4 py-2">Cover Letter</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={job._id} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-400 px-4 py-2">
                {job.fullName}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {job.applicant_email}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {job.resume ? (
                  <a
                    href={job.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Resume
                  </a>
                ) : (
                  "Not Provided"
                )}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {job.coverLetter}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyApply;
