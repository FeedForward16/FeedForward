import React, { useState } from "react";
import DashboardContainer from "../../container/Dashboard/DashboardContainer";
import Card from "../../component/Card/Card";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState(null);
  const [cards, setCards] = useState([]);

  const titleHandler = (e) => setTitle(e.target.value);
  const descriptionHandler = (e) => setDescription(e.target.value);
  const videoHandler = (e) => setVideo(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !video) return;

    setCards((prev) => [...prev, { title, description, video }]);

    // Clear form fields after submission
    setTitle("");
    setDescription("");
    setVideo(null);
  };

  return (
    <div>
      <DashboardContainer
        title={title}
        description={description}
        video={video}
        onTitleChange={titleHandler}
        onDescriptionChange={descriptionHandler}
        onVideoChange={videoHandler}
        onSubmit={handleSubmit}
      />

      <div>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            video={card.video}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
