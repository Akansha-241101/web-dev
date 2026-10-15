import { useEffect, useState } from "react";

function ChannelSheet({ channel, isOpen, onClose }) {
  const [isPresent, setIsPresent] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isOpen && channel) {
      setIsPresent(true);
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsActive(true));
      });
      return () => cancelAnimationFrame(frame);
    }

    setIsActive(false);
    const timer = setTimeout(() => setIsPresent(false), 350);
    return () => clearTimeout(timer);
  }, [isOpen, channel]);

  useEffect(() => {
    if (!isPresent) return;

    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isPresent, onClose]);

  useEffect(() => {
    document.body.classList.toggle("sheet-open", isPresent);
  }, [isPresent]);

  if (!channel || !isPresent) return null;

  return (
    <>
      <div
        className={`overlay${isActive ? " is-open" : ""}`}
        onClick={onClose}
      ></div>
      <aside
        className={`sheet${isActive ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
      >
        <div className="sheet-header">
          <div>
            <h2 id="sheet-title">{channel.name}</h2>
            <p className="sheet-meta">{channel.handle}</p>
            <p className="focus-pill">{channel.focus}</p>
          </div>
          <button type="button" className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="sheet-body">
          <h3>Where it helps you</h3>
          <p>{channel.overview}</p>
          <h3>Tags</h3>
          <div className="sheet-tags">
            {channel.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
          <a
            className="sheet-link"
            href={channel.url}
            target="_blank"
            rel="noreferrer"
          >
            Open channel
          </a>
        </div>
      </aside>
    </>
  );
}

export default ChannelSheet;
