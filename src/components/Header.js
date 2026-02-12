import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="flex justify-between shadow-lg">
      <div className="">
        <img src={LOGO_URL} className="w-[112px]" />
      </div>
      <div>
        <ul className="flex  gap-5 p-2 py-2 m-6 font-semibold  list-none">
          <li>Find Jobs</li>
          <li>About Us</li>
          <li>Upload your Resume</li>
          <li>Support</li>
          <button
            className="border rounded-md px-2 py-2 mx-2 bg-blue-300"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
