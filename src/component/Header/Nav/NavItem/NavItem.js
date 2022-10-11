const NavItem = ({ path, title }) => {
  return (
    <div className="text-black/90 font-semibold hover:text-slate-500 dark:text-white/90 dark:hover:text-slate-300 mx-8">
      <a href={path}>{title}</a>
    </div>
  );
};

export default NavItem;
