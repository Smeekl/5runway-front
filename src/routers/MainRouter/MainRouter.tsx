import { Routes, Route } from 'react-router-dom';
import MainPage from '@pages/Main/Main';

const Router = () => (
  <Routes>
    <Route path="/*" element={<MainPage />} />
  </Routes>
);

const MainRouter = () => (
  <Routes>
    <Route path="/*" element={<Router />} />
  </Routes>
);

export default MainRouter;
