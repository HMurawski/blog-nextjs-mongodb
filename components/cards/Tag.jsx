import React from "react";

const Tag = ({ tag, isSelected, setSelectedTags }) => {
	if (isSelected) {
        return (<div onClick={() => {
            setSelectedTags((prev) => prev.filter((item) => item !==tag ))
        }} className="bg-green-600 text-white font-semibold py-1 px-2 rounded-lg hover:shadow-lg transition duration-300 ease-in-out flex items-center justify-center ">
            {tag}
        </div>)
	} else {

    }
};

export default Tag;
