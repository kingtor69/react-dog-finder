import defaultProps from './defaultProps';
import AppRoutes from './AppRoutes';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppRoutes dogsData={defaultProps} />
    </div>
  );
};

export default App;
