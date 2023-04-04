import { BrowserRouter as Router } from 'react-router-dom';
import CreateRoutes from './CreateRoutes';
import React, { ReactElement } from 'react';

function App(): ReactElement {
  return (
    <Router>
      <main className="min-w-max min-h-max max-w-screen max-h-screen">
        <CreateRoutes />
      </main>
    </Router>
  );
}

export default App;
