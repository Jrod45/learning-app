import { Link } from 'react-router-dom';
import { HomeIcon, AcademicCapIcon, ChartBarIcon, CogIcon } from '@heroicons/react/solid';
import '../assets/styles/Sidebar.css';

const Sidebar = ({ activeSection = 'home', onSectionChange }) => {
  const navigationItems = [
    { icon: <HomeIcon className="h-6 w-6" />, label: 'Home', section: 'home', path: '/' },
    { icon: <AcademicCapIcon className="h-6 w-6" />, label: 'Lessons', section: 'lessons', path: '/lessons' },
    { icon: <ChartBarIcon className="h-6 w-6" />, label: 'Progress', section: 'progress', path: '/progress' },
    { icon: <AcademicCapIcon className="h-6 w-6" />, label: 'Achievements', section: 'achievements', path: '/achievements' },
    { icon: <CogIcon className="h-6 w-6" />, label: 'Settings', section: 'settings', path: '/settings' }
  ];

  return (
    <div className="sidebar">
      {/* Main Menu */}
      <div className="sidebar-menu-title">Menu</div>
      <ul className="sidebar-menu-items-list">
        {navigationItems.map((item) => (
          <li
            key={item.section}
            className={`sidebar-item ${activeSection === item.section ? 'active' : ''}`}
          >
            <Link to={item.path} className="sidebar-link">
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
