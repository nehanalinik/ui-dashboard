import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import review1 from "../assets/review1.webp";
import review2 from "../assets/review2.webp";
import review3 from "../assets/review3.webp";

const CustomerFeedback = () => {
  const feedbacks = [
    {
      customer: "Jenny Wilson",
      rating: 4,
      feedback:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
      imgSrc: review1,
    },
    {
      customer: "Dianne Russell",
      rating: 5,
      feedback:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
      imgSrc: review2,
    },
    {
      customer: "Devon Lane",
      rating: 4,
      feedback:
        "Normally wings are wings, but theirs are lean, meaty and tender, and their sauce is spot on.",
      imgSrc: review3,
    },
  ];
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Customer’s Feedback</h2>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center mb-2">
            <img
              src={feedback.imgSrc}
              alt={feedback.customer}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div className="font-bold">{feedback.customer}</div>
          </div>
          <div className="flex items-center mb-2">
            {Array.from({ length: 5 }, (_, i) =>
              i < feedback.rating ? (
                <FaStar key={i} className="text-yellowColor-400" />
              ) : (
                <FaRegStar key={i} className="text-yellowColor-400" />
              )
            )}
          </div>
          <div className="text-sm">{feedback.feedback}</div>
          {index < feedbacks.length - 1 && (
            <hr className="border-gray-700 mt-4" />
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
