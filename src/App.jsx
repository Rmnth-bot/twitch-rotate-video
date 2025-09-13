import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="video-chat-wrapper">
        <div className="video">
          <iframe
            src="https://player.twitch.tv/?channel=quintero0&parent=twitch-rotate-video-otjf.vercel.app"
            height="100%"
            width="100%"
            allowFullScreen
            frameBorder="0"
            title="Twitch Stream"
          ></iframe>
        </div>

        <div className="chat">
          <iframe
            src="https://www.twitch.tv/embed/quintero0/chat?parent=twitch-rotate-video-otjf.vercel.app"
            height="100%"
            width="100%"
            frameBorder="0"
            title="Twitch Chat"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
