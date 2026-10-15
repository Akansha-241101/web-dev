import ChannelCard from "./ChannelCard";

function ChannelList({ channels, onOpen }) {
  if (channels.length === 0) {
    return <p className="empty">No channels match this tag.</p>;
  }

  return (
    <div className="channel-list">
      {channels.map((channel) => (
        <ChannelCard key={channel.id} channel={channel} onOpen={onOpen} />
      ))}
    </div>
  );
}

export default ChannelList;
