import React, {
  useRef,
  useState,
} from "react"; /*É possível utilizar a função rcfe para criar o componente automaticamente*/
import "./video.css";
import VideoSideBar from "./components/sidebar/VideoSideBar";
import VideoFooter from "./components/footer/VideoFooter";

function Video({ likes, messages, shares, name, description, music, url }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (!play) {
      videoRef.current.play(); /*Quando clica no vídeo ele da play*/
      setPlay(true);
    } else {
      videoRef.current.pause(); /*Quando clica no vídeo ele pausa*/
      setPlay(false);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop /*Deixa o vídeo em loop*/
        /*controls    Adiciona o player do vídeo*/
        src={url} /*Adicionar endereço do vídeo*/
      ></video>
      <VideoSideBar likes={likes} messages={messages} shares={shares}/>
      <VideoFooter 
      name={name}
      description={description}
      music={music}
      />
    </div>
  );
}

export default Video;
