function ChannelCard({ channel, onOpen }) {
  return (
    <button
      type="button"
      className="channel-card"
      onClick={() => onOpen(channel)}
      aria-haspopup="dialog"
    >
      <span className="card-blob" aria-hidden="true"></span>
      <span className="card-number" aria-hidden="true">
        {channel.priority}
      </span>
      <span className="card-content">
        <span className="card-top">
          <h2>{channel.name}</h2>
          <span className="handle">{channel.handle}</span>
        </span>
        <p className="focus-label">{channel.focus}</p>
        <div className="card-tags">
          {channel.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
        <p className="hint">Details →</p>
      </span>
    </button>
  );
}

export default ChannelCard;
