import React, { useState } from "react";
// import { useNavigation } from "../../../utils/context/settingContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons"; // Import faEye and faEyeSlash
import padlock from "../../assets/2889676.png"; // Assuming you have a padlock icon

function ChangePassword() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-white">
      <div className="flex flex-col w-full lg:w-[60%] rounded-xl bg-white">
        <div className="flex  pt-4 ml-4 text-xl font-semibold">
          Change Password
        </div>
        <div className="flex items-center p-5">
          <div className="h-20 w-20 flex justify-center item-center rounded-full border">
            <img className="h-15 w-15 pt-4" src={padlock} alt="" />
          </div>

          <div className="pl-5 text-xl ">
            <h2>Update your password for enhanced account security</h2>
          </div>
        </div>
        <hr className="mx-6 border-gray-300" />
        <form className="w-full space-y-6 p-6">
          <div className="mb-6 relative">
            {" "}
            {/* Added relative to parent div */}
            <label
              htmlFor="current-password"
              className="block mb-1 font-medium"
            >
              Current Password
              <span className="text-red-500"> *</span>
            </label>
            <div className="relative">
              <input
                placeholder="Current Password"
                type={showCurrent ? "text" : "password"}
                id="current-password"
                name="current-password"
                required
                className="w-full px-3 py-2 pr-10 rounded-md bg-[#F9F9F9] text-base border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#F89320]"
              />
              <button
                type="button"
                onMouseDown={() => setShowCurrent(true)}
                onMouseUp={() => setShowCurrent(false)}
                onMouseLeave={() => setShowCurrent(false)}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter") setShowCurrent(true);
                }}
                onKeyUp={(e) => {
                  if (e.key === " " || e.key === "Enter") setShowCurrent(false);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-lg text-black" // Adjusted positioning
                tabIndex={0}
                aria-label={showCurrent ? "Hide password" : "Show password"}
              >
                <FontAwesomeIcon
                  className="text-gray-500"
                  icon={showCurrent ? faEyeSlash : faEye}
                />{" "}
                {/* Use FontAwesomeIcon component */}
              </button>
            </div>
          </div>
          <div className="mb-6 relative">
            {" "}
            {/* Added relative to parent div */}
            <label htmlFor="new-password" className="block mb-1 font-medium">
              New Password
              <span className="text-red-500"> *</span>
            </label>
            <div className="relative">
              <input
                placeholder="New Password"
                type={showNew ? "text" : "password"}
                id="new-password"
                name="new-password"
                required
                className="w-full px-3 py-2 pr-10 rounded-md bg-[#F9F9F9] text-base focus:outline-none focus:ring-2 focus:ring-[#F89320]"
              />
              <button
                type="button"
                onMouseDown={() => setShowNew(true)}
                onMouseUp={() => setShowNew(false)}
                onMouseLeave={() => setShowNew(false)}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter") setShowNew(true);
                }}
                onKeyUp={(e) => {
                  if (e.key === " " || e.key === "Enter") setShowNew(false);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-lg text-black"
                tabIndex={0}
                aria-label={showNew ? "Hide password" : "Show password"}
              >
                <FontAwesomeIcon
                  className="text-gray-500"
                  icon={showNew ? faEyeSlash : faEye}
                />{" "}
                {/* Use FontAwesomeIcon component */}
              </button>
            </div>
          </div>
          <div className="mb-6 relative">
            {" "}
            {/* Added relative to parent div */}
            <label
              htmlFor="confirm-password"
              className="block mb-1 font-medium"
            >
              Confirm New Password
              <span className="text-red-500"> *</span>
            </label>
            <div className="relative">
              <input
                placeholder="Confirm New Password"
                type={showConfirm ? "text" : "password"}
                id="confirm-password"
                name="confirm-password"
                required
                className="w-full px-3 py-2 pr-10 rounded-md bg-[#F9F9F9] text-base focus:outline-none focus:ring-2 focus:ring-[#F89320]"
              />
              <button
                type="button"
                onMouseDown={() => setShowConfirm(true)}
                onMouseUp={() => setShowConfirm(false)}
                onMouseLeave={() => setShowConfirm(false)}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter") setShowConfirm(true);
                }}
                onKeyUp={(e) => {
                  if (e.key === " " || e.key === "Enter") setShowConfirm(false);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-lg text-black"
                tabIndex={0}
                aria-label={showConfirm ? "Hide password" : "Show password"}
              >
                <FontAwesomeIcon
                  className="text-gray-500"
                  icon={showConfirm ? faEyeSlash : faEye}
                />{" "}
                {/* Use FontAwesomeIcon component */}
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              type="reset"
              className="w-full py-1 rounded-lg border-[0.1px] border-[#F89320] font-semibold text-[#F89320]  text-base cursor-pointer hover:bg-[#F89320] hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full py-1 rounded-lg border-[0.1px] border-[#F89320] font-semibold text-[#F89320] cursor-pointer hover:bg-[#F89320] hover:text-white transition-colors"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
