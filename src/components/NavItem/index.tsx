import { NavLink } from "react-router-dom";

function NavItem({
  title,
  redirectTo,
  activeStyle,
}: {
  title: string;
  redirectTo: string;
  activeStyle?: string;
}): JSX.Element {
  return (
    <li>
      <NavLink 
        to={redirectTo} 
        className={({ isActive }) => (isActive ? activeStyle : undefined)}>
        {title}
      </NavLink>
    </li>
  );
}

export { NavItem };
