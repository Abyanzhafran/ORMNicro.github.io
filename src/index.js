import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LayoutDashboard from './components/LayoutDashboard';
import DashboardNewsList from './pages/dashboard/DashboardNewsList';
import DashboardEmployeeList from './pages/dashboard/DashboardEmployeeList';
import LayoutNews from './components/LayoutOrmNews';
import OrmNewsRead from './pages/news/NewsRead';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="dashboardAdmin" element={<LayoutDashboard />}>
          <Route path="/dashboardAdmin/newsList" element={<DashboardNewsList />} />
          <Route path="/dashboardAdmin/employeeList" element={<DashboardEmployeeList />} />
        </Route>
        <Route path="ormNews" element={<LayoutNews />}>
          <Route path="/ormNews/newsRead/:newsId" element={<OrmNewsRead />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();