import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";

import { colleges } from "../colleges";
import CollegeCard from "../CollegeCard/CollegeCard";

const CollegesList = () => {
  const [collegesList, setCollegesList] = useState(colleges.slice(0, 10));
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(() => {
    if (collegesList.length < colleges.length && !loading) {
      setLoading(true);

      // mock api call
      setTimeout(() => {
        setCollegesList((prev) => [
          ...prev,
          ...colleges.slice(prev.length, prev.length + 10),
        ]);
        setLoading(false);
      }, 2000);
    }
  }, [collegesList, loading]);

  useEffect(() => {
    const root = document.getElementById("root");

    const onScroll = () => {
      if (root.scrollTop + root.clientHeight >= root.scrollHeight) {
        debounce(loadMore, 500)();
      }
    };

    root.addEventListener("scroll", onScroll);

    return () => {
      root.removeEventListener("scroll", onScroll);
    };
  }, [loadMore]);

  return (
    <div className="colleges-list mt-5">
      {collegesList.map((college) => (
        <CollegeCard key={college.college_name} data={college} />
      ))}
      {loading && <div className="mt-2 mb-5 text-center">Loading...</div>}
    </div>
  );
};

export default CollegesList;
