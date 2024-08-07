import React from "react";
import { IconType } from "react-icons";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface MetricCardProps {
  icon: IconType;
  iconBgColor: string;
  iconColor: string;
  label: string;
  value: string;
  percentage: string;
  percentageType: "increase" | "decrease";
  percentageColor: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  iconBgColor,
  iconColor,
  label,
  value,
  percentage,
  percentageType,
  percentageColor,
}) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex flex-col">
      <div className="flex flex-col gap-2">
        <div className={`${iconBgColor} w-min rounded-md p-2`}>
          <Icon size={32} className={iconColor} />
        </div>
        <div className="text-sm">{label}</div>
      </div>
      <div className="mt-4 w-full flex items-center justify-between">
        <div className="text-4xl font-bold mt-2">{value}</div>
        <div className={`${percentageColor} mt-2 flex items-center`}>
          <span className="text-xs mr-1">
            {percentageType === "increase" ? (
              <FaCaretUp size={18} />
            ) : (
              <FaCaretDown size={18} />
            )}
          </span>
          {percentage}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
