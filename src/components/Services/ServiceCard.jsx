import { BsArrowRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor, specialty } = item;
  const navigate = useNavigate(); // Sử dụng hook để điều hướng

  const handleClick = () => {
    navigate(`/doctors?specialty=${specialty}`); // Truyền tên chuyên khoa qua URL
  };

  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>

      <div className="flex items-center justify-between mt-[30px]">
        <button
          onClick={handleClick}
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  flex items-center justify-center group hover:bg-[#0097B2] hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </button>
        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30] font-[600]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`, // Chú ý là dùng "color" thay vì "textColor" trong style
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
