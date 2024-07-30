import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GithubStats = () => {
  const [stars, setStars] = useState(null);
  const [issues, setIssues] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/Utkarsh09102004/timetable');
        setStars(response.data.stargazers_count);
        setIssues(response.data.open_issues_count);
      } catch (err) {
        setError('Failed to fetch data');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="github-stats">
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className="stat">
            <div className="issue-name">
              <img src="src/assets/github-logo-white.png" alt="GitHub Logo"/>
              Stars
            </div>
            <div className="issue-stats">
              {stars !== null ? stars : 'Loading...'}
            </div>
          </div>
          <div className="stat">
            <div className="issue-name">
              <img src="src/assets/github-logo-white.png" alt="GitHub Logo"/>
              Issues
            </div>
            <div className="issue-stats">
              {issues !== null ? issues : 'Loading...'}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GithubStats;
