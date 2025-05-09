import React from "react";

const Card = ({ title, description, video }) => {
  return (
    <div style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "16px" }}>
      <h3>{title}</h3>
      <p>{description}</p>
      {video && (
        <video width="320" height="240" controls>
          <source src={URL.createObjectURL(video)} type={video.type} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Card;
