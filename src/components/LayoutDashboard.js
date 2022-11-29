/* eslint-disable jsx-a11y/anchor-is-valid */
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import {
  Link,
  Route,
  Routes
} from "react-router-dom";
import DashboardNewsList from '../pages/dashboard/DashboardNewsList';
import DashboardEmployeeList from '../pages/dashboard/DashboardEmployeeList';

export default function LayoutDashboard() {
  const btnSidebar = [
    {
      icon: <HomeIcon />,
      name: 'Daftar Berita',
      link: '/dashboardAdmin/newsList'
    },
    {
      icon: <GroupIcon />,
      name: 'Daftar Karyawan',
      link: '/dashboardAdmin/employeeList'
    }
  ];

  return (
    <>
      <div className="shadow bg-gray-50 drawer drawer-mobile h-screen">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col items-center justify-center drawer-content">
          <div className="w-full navbar flex items-center bg-gray-50 sticky top-0">
            <div className="flex-none lg:hidden">
              <label for="my-drawer-2" className="btn btn-square btn-ghost">
                <MenuIcon className="text-black" />
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <img src="/airGunIndo.png" className="w-32" alt="" />
            </div>
            <button className="flex items-center">
              <div className="avatar">
                <div className="rounded-full w-8 mt-1">
                  <img src="http://daisyui.com/tailwind-css-component-profile-5@56w.png" alt="" />
                </div>
              </div>
              <ArrowDropDownIcon className="text-white" />
            </button>
          </div>
          <main className="flex h-full w-full justify-center items-start bg-gray-200">
            <Routes>
              <Route path="/newsList" element={<DashboardNewsList />} />
              <Route path="/employeeList" element={<DashboardEmployeeList />} />
            </Routes>
          </main>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-gray-50 text-base-content">
            <div>
              <span className="text-xl font-bold text-black">Dashboard</span>
            </div>
            <div className="border-b-2 bg-black my-4" />
            <li className="text-black">
              {btnSidebar.map((el) => (
                <Link to={el.link} className="flex gap-3">
                  {el.icon}
                  {el.name}
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}