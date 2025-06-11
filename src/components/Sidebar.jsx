import { Link } from 'react-router-dom';
import '../assets/styles/Sidebar.css';

const Sidebar = ({ activeSection = 'home', onSectionChange }) => {
  const navigationItems = [
    { icon: '🏠', label: 'Home', section: 'home', path: '/' },
    { icon: '📚', label: 'Lessons', section: 'lessons', path: '/lessons' },
    { icon: '📊', label: 'Progress', section: 'progress', path: '/progress' },
    { icon: '🏆', label: 'Achievements', section: 'achievements', path: '/achievements' },
    { icon: '⚙️', label: 'Settings', section: 'settings', path: '/settings' }
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
