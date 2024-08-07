import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaCaretUp } from "react-icons/fa6";

const ProfileCard = () => {
  const percentage = 70;
  return (
    <div className="bg-gray-800 text-white px-4 py-9 rounded-lg shadow-lg flex justify-between items-center">
      <div>
        <div className="text-sm">Net Profit</div>
        <div className="text-4xl font-bold mt-2">$ 6759.25</div>
        <div className="text-green-500 mt-2 flex items-center">
          <span className="text-xs mr-1">
            <FaCaretUp size={18} />
          </span>{" "}
          3%
        </div>
      </div>
      <div className="w-24 h-24">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: "#4299e1",
            trailColor: "#2d3748",
          })}
        />
        <div className="text-center text-xs mt-2">Goal Completed</div>
      </div>
    </div>
  );
};

export default ProfileCard;
