import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <h1>Cohort Dashboard</h1>
      <CohortDetails name="React Bootcamp" status="ongoing" />
      <CohortDetails name="Angular Bootcamp" status="completed" />
    </div>
  );
}

export default App;
