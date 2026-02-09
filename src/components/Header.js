import { LOGO_URL } from "../utils/constant";
const Header = () => {
  return (
    <div className="flex">
      <div>
        <img src={LOGO_URL} className="w-[150px]" />
      </div>
      <ul className="list-none flex">
        <li>Find Jobs</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Support</li>
      </ul>
    </div>
  );
};
export default Header;
