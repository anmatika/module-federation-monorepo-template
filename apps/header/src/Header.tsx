import React from "react";

const Header = (props) => {
  const { title } = props;

  return (
    <div className="mt-10 bg-gray-100 mb-10 h-32 border-b-2 text-3xl mx-auto max-w-6xl font-bold">
      {title}
    </div>
  )
};

export default Header;
