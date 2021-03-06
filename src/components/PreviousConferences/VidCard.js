import React, { useState } from 'react';
import './VidCard.css';

function VidCard(props) {
  const [isImageDisplayed, setImageVisibility] = useState('block');
  const [IsIframeDisplayed, setIframeVisibility] = useState('none');
  const [autoplayOn, setAutoplayOn] = useState('0');
  const video = props;

  return (
    <div className="videocard-div">
      <iframe
        style={{ display: IsIframeDisplayed }}
        className="custom-card"
        title={video.title}
        src={`${video.link}?autoplay=${autoplayOn}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        webkitallowfullscreen
        mozallowfullscreen
        onMouseLeave={() => {
          setIframeVisibility('none');
          setAutoplayOn('0');
          setImageVisibility('block');
        }}
      />
      <img
        style={{ display: isImageDisplayed }}
        className="custom-card"
        src={require(`../../assets/previousconferences/conferences/${video.imageLocal}`)}
        alt={video.title}
        onMouseEnter={() => {
          setIframeVisibility('block');
          setAutoplayOn('1');
          setImageVisibility('none');
        }}
      />
    </div>
  );
}

export default VidCard;
