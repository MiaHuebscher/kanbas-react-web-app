// entry point to web application
import Labs from './Labs';
import Kanbas from './Kanbas';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Kanbas/store';

function App() {
  return (
    <HashRouter>
      <div className="h-100">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </Provider>
      </div>
    </HashRouter>
  );
}

export default App;
