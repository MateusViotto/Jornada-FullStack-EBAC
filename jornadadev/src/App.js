import './App.css';
import Video from './pages/Video'

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
    <Video 
      likes={100}
      messages={200}
      shares={300}
      name="MateusViotto"
      description="Gato goleiro"
      music="musica épica"
      url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=d1a44acd-bef3-4b18-bafe-92fa0b26828a"
    />
    <Video 
      likes={100}
      messages={200}
      shares={300}
      name="MateusViotto2"
      description="Gato goleiro2"
      music="musica épica2"
      url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=d1a44acd-bef3-4b18-bafe-92fa0b26828a"
    />

      </div>
    </div>
  );
}

export default App;
