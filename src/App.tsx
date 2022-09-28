import { BrowserRouter as Router } from 'react-router-dom';
import CreateRoutes from './CreateRoutes';
import React, { ReactElement } from 'react';

function App(): ReactElement {
  return (
    <Router>
      <main className="min-w-max min-h-max">
        <CreateRoutes />
      </main>
    </Router>
  );
}

export default App;
