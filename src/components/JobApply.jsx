import React, { useState } from "react";
import useAuth from "../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const JobApply = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const resume = form.resume.files[0];
    const coverLetter = form.coverLetter.value;

    const jobApplication = {
      job_id: "job123",
      fullName,
      applicant_email: user.email || email,
      resume,
      coverLetter,
    };

    // // File upload logic (if necessary)
    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("data", JSON.stringify(jobApplication));

    fetch("http://localhost:5000/applys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Application submitted successfully!");
          navigate("/my-apply");
        }
      })
      .catch((err) => console.error("Error submitting application:", err));
  };

  return (
    <div className="job-apply-container container mx-auto my-6">
      <h1 className="text-2xl font-bold mb-4">Apply for a Job</h1>
      <form onSubmit={submitJobApplication} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Resume</label>
          <input type="file" name="resume" className="w-full" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Cover Letter</label>
          <textarea
            name="coverLetter"
            className="w-full border rounded px-3 py-2"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApply;
