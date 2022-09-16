import Link from "next/link";

const NavItem = ({ text, href, active }) => {
    return (
      <Link href= '/posts/first-post'>
        <a
          className={`nav__item ${
            active ? "active" : ""
          }`}
        >
          {text}
        </a>
      </Link>
    );
  };
  
  export default NavItem;