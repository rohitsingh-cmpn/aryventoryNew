import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowRightArrowLeft,
  faArrowRightFromBracket,
  faCheckCircle,
  faCheckSquare,
  faCircleInfo,
  faCodeMerge,
  faFileLines,
  faHexagonNodes,
  faHexagonNodesBolt,
  faInfo,
  faInfoCircle,
  faLockOpen,
  faMessage,
  faPaintBrush,
  faPhone,
  faRightFromBracket,
  faShield,
  faShieldHalved,
  faStar,
  faUnlockAlt,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { fa6 } from "@fortawesome/free-solid-svg-icons/fa6";
import { faWallet } from "@fortawesome/free-solid-svg-icons/faWallet";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faUnlock } from "@fortawesome/free-solid-svg-icons/faUnlock";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { useSideBar } from "../../utils/context/SideBarContext";
import { useNavigation } from "../../utils/context/settingContext";

const content = [
  {
    name: "Privacy & Security",
    icon: faShieldHalved,
    NavLink: "privacyandsecurity",
  },
  {
    name: "Other Expense",
    icon: faWallet,
    NavLink: "otherexpense",
  },
  {
    name: "Feedback",
    icon: faMessage,
    NavLink: "feedback",
  },
  {
    name: "Rate App",
    icon: faStar,
    NavLink: "rateapp",
  },
  {
    name: "About",
    icon: faCircleInfo,
    NavLink: "about",
  },
  {
    name: "Terms & Conditions",
    icon: faFileLines,
    NavLink: "termsandconditions",
  },
  {
    name: "Contact Us",
    icon: faPhone,
    NavLink: "contactus",
  },
  {
    name: "App Version",
    icon: faCodeMerge,
    NavLink: "appversion",
  },
  {
    name: "LogOut",
    icon: faArrowRightFromBracket,
    NavLink: "logout",
  },
];
const Privacy = [
  {
    name: "Change Password",
    icon: faUnlockAlt,
    Link: "privacyandsecurity/changepassword",
  },
  {
    name: "Acknowledgement",
    icon: faCheckSquare,
    Link: "privacyandsecurity/acknowledgement",
  },
  {
    name: "Terms of Service",
    icon: faFileLines,
    Link: "privacyandsecurity/termsandservice",
  },
  {
    name: "Privacy Policy",
    icon: faShield,
    Link: "privacyandsecurity/privacypolicy",
  },
];

function SettingSidebar() {
  const { currentPage, navigate } = useNavigation();

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  // const {isMenuOpened, setIsMenuOpened} = useSideBar();
  function handleMenu() {
    setIsMenuOpened(!isMenuOpened);
    // console.log(isMenuOpened);
  }

  return (
    <div className="flex flex-col grow  h-full  bg-[#FFFFFF] p-4 rounded-2xl">
      <div className="text-2xl font-light mb-4">Setting</div>
      <div className="">
        <div className=" flex flex-col gap-2">
          <div className="flex flex-col bg-[#F8F9FD] rounded-2xl">
            <div>
              <NavLink to={content[0].NavLink}>
                <div
                  onClick={handleMenu}
                  className="flex cursor-pointer flex-row items-center bg-[#F8F9FD] p-3 hover:bg-[#FFC467] rounded-2xl"
                >
                  <div className="">
                    <FontAwesomeIcon size="lg" icon={content[0].icon} />
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <div className="pl-4 whitespace-nowrap">
                      {content[0].name}
                    </div>
                    <div>
                      <FontAwesomeIcon
                        size="lg"
                        className={`transition-transform duration-300 ${
                          isMenuOpened ? "-rotate-90" : "rotate-0"
                        }`}
                        icon={faAngleRight}
                      />
                    </div>
                  </div>
                </div>
              </NavLink>
              {!isMenuOpened && <hr className="text-[#EFEFF0]" />}
              <div
                className={`transition-all duration-700 ease-in-out overflow-hidden  border-[#EFEFF0] rounded-2xl pl-4 ${
                  isMenuOpened
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {Privacy.map((item, i, arr) => (
                  <Link key={i} onClick={navigate} to={item.Link}>
                    <div className="transition-all duration-300 ease-in-out flex flex-row items-center bg-[#F8F9FD] p-3 hover:bg-[#FFC467] rounded-2xl">
                      <div>
                        <FontAwesomeIcon size="lg" icon={item.icon} />
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <div className="pl-4 whitespace-nowrap">
                          {item.name}
                        </div>
                        <div>
                          <FontAwesomeIcon size="lg" icon={faAngleRight} />
                        </div>
                      </div>
                    </div>
                    {i < arr.length - 1 && <hr className="text-[#EFEFF0]" />}
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-[#F8F9FD] rounded-2xl">
              {content.slice(1, 3).map((item, i, arr) => (
                <NavLink onClick={navigate} key={i} to={item.NavLink}>
                  <div
                    key={i}
                    className="flex flex-row items-center bg-[#F8F9FD]  p-3 hover:bg-[#FFC467] rounded-2xl"
                  >
                    <div className="">
                      <FontAwesomeIcon size="lg" icon={item.icon} />
                    </div>
                    <div className="flex  flex-row justify-between w-full">
                      <div className="pl-4 whitespace-nowrap">{item.name}</div>
                      <div>
                        <FontAwesomeIcon size="lg" icon={faAngleRight} />
                      </div>
                    </div>
                  </div>
                  {i < arr.length - 1 && <hr className="text-[#EFEFF0]" />}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="bg-[#F8F9FD] rounded-2xl">
            {content.slice(3, 5).map((item, i, arr) => (
              <NavLink onClick={navigate} key={i} to={item.NavLink}>
                <div
                  key={i}
                  className="flex flex-row items-center bg-[#F8F9FD]  p-3 hover:bg-[#FFC467] rounded-2xl"
                >
                  <div className="">
                    <FontAwesomeIcon size="lg" icon={item.icon} />
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <div className="pl-4 whitespace-nowrap">{item.name}</div>
                    <div>
                      <FontAwesomeIcon size="lg" icon={faAngleRight} />
                    </div>
                  </div>
                </div>
                {i < arr.length - 1 && <hr className="text-[#EFEFF0]" />}
              </NavLink>
            ))}
          </div>
          <div className="bg-[#F8F9FD] rounded-2xl">
            {content.slice(5, 8).map((item, i, arr) => (
              <NavLink onClick={navigate} key={i} to={item.NavLink}>
                <div
                  key={i}
                  className="flex flex-row items-center bg-[#F8F9FD] p-3 hover:bg-[#FFC467] rounded-2xl"
                >
                  <div className="">
                    <FontAwesomeIcon size="lg" icon={item.icon} />
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <div className="pl-4 whitespace-nowrap">{item.name}</div>
                    <div>
                      <FontAwesomeIcon size="lg" icon={faAngleRight} />
                    </div>
                  </div>
                </div>
                {i < arr.length - 1 && <hr className="text-[#EFEFF0] z-30" />}
              </NavLink>
            ))}
          </div>
          <div className="bg-[#F8F9FD] rounded-2xl">
            {content.slice(8, 9).map((item, i, arr) => (
              <NavLink onClick={navigate} key={i} to={item.NavLink}>
                <div
                  key={i}
                  className="flex flex-row items-center bg-[#F8F9FD] p-3 hover:bg-[#F8F9FD] rounded-2xl"
                >
                  <div className="">
                    <FontAwesomeIcon size="lg" icon={item.icon} />
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <div className="pl-4 whitespace-nowrap">{item.name}</div>
                    <div>
                      <FontAwesomeIcon size="lg" icon={faAngleRight} />
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function settingPage() {
  const { currentPage, navigate } = useNavigation();

  return (
    <div className="flex flex-col w-full  rounded-2xl h-[calc(100vh-65px)]  duration-300 ease-in-out">
      <div className="flex flex-row w-full p-4 h-full gap-5 overflow-hidden">
        <div
          className={` sm:block sm:flex-1/5  ${
            currentPage ? "flex-1 " : " hidden"
          } ease-in-out rounded-2xl `}
        >
          <SettingSidebar />
        </div>
        <div
          className={` sm:block  ${`sm:`}  ${
            currentPage ? " hidden" : " flex-1"
          } sm:flex-4/5  shadow-md`}
        >
          <Outlet />

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default settingPage;
