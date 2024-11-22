import React from "react";

interface WhyChooseCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  iconColor?: string;
  iconSize?: number;
}

const WhyChooseCard: React.FC<WhyChooseCardProps> = ({
  icon: Icon,
  title,
  description,
  iconColor = "white",
  iconSize = 70,
}) => {
  return (
    <div className="flex md:flex-row flex-col md:gap-5 gap-2 ">
      <div
        className="bg-secondary flex items-center justify-center px-4 py-1"
        style={{
          width: iconSize,
          height: iconSize,
          color: iconColor,
        }}
      >
        <Icon size={iconSize} color={iconColor} />
      </div>
      <div>
        <h4 className="text-2xl font-semibold">{title}</h4>
        <h6 className="md:text-sm text-xs text-gray-600 line-clamp-4">
          {description}
        </h6>
      </div>
    </div>
  );
};

export default WhyChooseCard;
