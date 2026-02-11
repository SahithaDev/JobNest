import { LOGO_URL } from "../utils/constant";
const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4 shadow-lg">
      <div>
        <img src={LOGO_URL} className="w-[150px]" />
      </div>
      <ul className=" flex items-center gap-8 text-sm font-medium list-none ">
        <li>Find Jobs</li>
        <li>About Us</li>
        <li>Upload your Resume</li>
        <li>Support</li>
      </ul>
    </div>
  );
};
export default Header;
