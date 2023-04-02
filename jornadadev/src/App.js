import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [video, setVideos] = useState([]);

  async function getvideos() {
    const videosCollection = collection(
      db,
      "videos"
    ); /*Acessa o banco de dados e a tabela videos*/
    const videosSnapshot = await getDocs(
      videosCollection
    ); /*Pega os dados da tabela, await pede para o java esperar a função rodar*/
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getvideos();
  }, []); /*Roda uma vez quando o aplicativo abrir*/

  return (
    <div className="App">
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
