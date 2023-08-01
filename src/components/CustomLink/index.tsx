import { NavLink } from "react-router-dom";

interface CustomLinkProps {
  url: string;
  children: React.ReactNode;
}

const CustomLink = ({ url, children }: CustomLinkProps) => {
  return (
    <NavLink
      to={url}
      style={({ isActive }) => ({
        color: isActive ? "#BA1200" : "#0C0C0C",
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: "none",
      })}
    >
      <span>{children}</span>
    </NavLink>
  );
};

export default CustomLink;
