import React, { useState } from "react";
import { toast } from "react-hot-toast";

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank You For Your Valuable Feedback");
    setFeedback("");
  };

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <div className="w-full h-24 flex items-center justify-center shadow-sm bg-[#2F4C7A]">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          Your Words Matter
        </h1>
      </div>

      {/* Feedback Section */}
      <section className="flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-4xl p-8 bg-white rounded-xl shadow-md border border-gray-200 space-y-6">
          <h2 className="text-2xl font-bold text-center text-(--color-primary)">
            Give Us Your Feedback
          </h2>

          <p className="text-center text-gray-500">
            We value your thoughts! Let us know how we can improve.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              className="w-full p-3 rounded-md border border-gray-300 focus:border-(--color-primary) focus:ring focus:ring-(--color-primary)/30 text-(--color-primary) resize-none h-32"
              placeholder="Write your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full py-3 rounded-full text-white font-semibold bg-linear-to-r from-(--color-primary) to-(--color-accent) hover:opacity-90 transition-all duration-300 shadow-md"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FeedbackSection;