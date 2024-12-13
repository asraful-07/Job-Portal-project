import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import HotCard from "./HotCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-24">
        {jobs?.map((job, idx) => (
          <HotCard key={idx} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
