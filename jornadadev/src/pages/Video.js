import React, {
  useRef,
  useState,
} from "react"; /*É possível utilizar a função rcfe para criar o componente automaticamente*/
import "./video.css";

function Video() {
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
        src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=d1a44acd-bef3-4b18-bafe-92fa0b26828a" /*Adicionar endereço do vídeo*/
      ></video>
    </div>
  );
}

export default Video;
