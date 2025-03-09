import React from "react";
import ProfileCard from "./profile-card";

const Grid: React.FC = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-1 p-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          
          //className="flex items-center justify-center bg-gray-200 p-6 rounded-lg shadow-md"
        >

           <ProfileCard />
           
        </div>
      ))}
    </div>
  );
};

export default Grid;
