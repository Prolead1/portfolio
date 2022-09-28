import { BrowserRouter as Router } from 'react-router-dom';
import CreateRoutes from './CreateRoutes';

function App() {
  return (
    <Router>
      <main className="min-w-max min-h-max">
        <CreateRoutes />
      </main>
    </Router>
  );
}

export default App;
