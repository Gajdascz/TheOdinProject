import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

BackgroundMusic.propTypes = {
  src: PropTypes.string,
  playing: PropTypes.bool,
};

export default function BackgroundMusic({ src, playing }) {
  const audioRef = useRef(null);
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (playing) audio.play();
      else audio.pause();
    }
    return () => {
      audio.pause();
    };
  }, [playing]);

  return <audio ref={audioRef} src={src} loop preload="auto" />;
}
