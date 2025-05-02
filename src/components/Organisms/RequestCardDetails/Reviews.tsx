import { useState } from "react";
import { type Review } from "~/types/mockDataTypes";
import { truncateWords } from "~/utils/truncateWords";
import { Paragraph } from "~/components/Atoms/Typography";

interface ReviewProps {
  review: Review;
}

const Reviews = ({ review }: ReviewProps) => {
  const [readMoreExpanded, setReadMoreExpanded] = useState(false);
  const { visible, hidden } = truncateWords(review.text, 8);

  return (
    <Paragraph className="text-gray-500 text-sm" variant="default">
      {visible} {readMoreExpanded && hidden}{" "}
      {hidden && (
        <button
          className="text-accent"
          onClick={() => setReadMoreExpanded((prev) => !prev)}
        >
          {readMoreExpanded ? "Show less" : "Read more"}
        </button>
      )}
    </Paragraph>
  );
};

export default Reviews;
