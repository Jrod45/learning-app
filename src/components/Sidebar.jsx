import '../assets/styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-menu-title">MENU</div>
      <ul className="sidebar-menu-items-list">
        <li className="sidebar-item">Item 1</li>
        <li className="sidebar-item">Item 2</li>
        <li className="sidebar-item">Item 3</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
