import { useState } from "react";

const RecipeCard = ({ recipeName, desc, status, when }) => {
  const [isClicked, setIsClicked] = useState(false);
  let bg;
  if (status === "Todo") {
    bg = "#E2E8F0";
  } else if (status === "Making") {
    bg = "#FEF08A";
  } else if (status === "Done") {
    bg = "#DCFCE7";
  }
  return (
    <div
      className="w-96 p-2 pt-1 rounded-md space-y-1.5 mb-3 cursor-pointer transition transform duration-100 ease-out"
      style={{ backgroundColor: bg }}
      onClick={isClicked ? () => setIsClicked(false) : () => setIsClicked(true)}
    >
      <h3 className="text-[1.55rem]">{recipeName}</h3>
      <p className="leading-relaxed line-clamp-3 w-full text-gray-700">
        {desc}
      </p>
      <p className="text-sm text-right text-gray-900">on {when}</p>
      {isClicked && (
        <div className="space-x-2">
          {status !== "Todo" && (
            <button className="bg-gray-800 p-2 text-white rounded-md cursor-pointer transition transform duration-100 ease-out md:active:scale-90">
              Want To Make
            </button>
          )}
          {status !== "Making" && (
            <button className="bg-gray-800 p-2 text-white rounded-md cursor-pointer transition transform duration-100 ease-out md:active:scale-90">
              Making
            </button>
          )}
          {status !== "Done" && (
            <button className="bg-gray-800 p-2 text-white rounded-md cursor-pointer transition transform duration-100 ease-out md:active:scale-90">
              Made
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
