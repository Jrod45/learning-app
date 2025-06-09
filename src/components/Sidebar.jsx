import '../assets/styles/Sidebar.css';

const Sidebar = ({ activeSection = 'home', onSectionChange }) => {
  const navigationItems = [
    { icon: '🏠', label: 'Home', section: 'home' },
    { icon: '📚', label: 'Lessons', section: 'lessons' },
    { icon: '📊', label: 'Progress', section: 'progress' },
    { icon: '🏆', label: 'Achievements', section: 'achievements' },
    { icon: '⚙️', label: 'Settings', section: 'settings' }
  ];
 
  const handleClick = (section) => {
    if (onSectionChange) onSectionChange(section);
  };

  return (
    <div className="sidebar">
      {/* Main Menu */}
      <div className="sidebar-menu-title">Menu</div>
      <ul className="sidebar-menu-items-list">
        {navigationItems.map((item) => (
          <li
            key={item.section}
            className={`sidebar-item ${activeSection === item.section ? 'active' : ''}`}
            onClick={() => handleClick(item.section)}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
