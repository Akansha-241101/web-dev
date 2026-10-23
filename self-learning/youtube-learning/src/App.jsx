import { useEffect, useState } from "react";
import { allTags, channels } from "./constants/channels";
import Background from "./components/Background";
import ChannelList from "./components/ChannelList";
import ChannelSheet from "./components/ChannelSheet";
import FilterDropdown from "./components/FilterDropdown";

function getTagsFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const value = params.get("tags");
  if (!value) return [];
  return value.split(",").filter((tag) => tag !== "");
}

function App() {
  const [selectedTags, setSelectedTags] = useState(getTagsFromUrl);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (selectedTags.length === 0) {
      params.delete("tags");
    } else {
      params.set("tags", selectedTags.join(","));
    }

    const query = params.toString();
    const nextUrl = query ? `?${query}` : window.location.pathname;
    window.history.replaceState({}, "", nextUrl);
  }, [selectedTags]);

  const sortedChannels = [...channels].sort(
    (a, b) => a.priority - b.priority,
  );

  const visibleChannels =
    selectedTags.length === 0
      ? sortedChannels
      : sortedChannels.filter((channel) =>
          selectedTags.some((tag) => channel.tags.includes(tag)),
        );

  const addTag = (tag) => {
    if (selectedTags.includes(tag)) return;
    setSelectedTags([...selectedTags, tag]);
  };

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((item) => item !== tag));
  };

  const openSheet = (channel) => {
    setSelectedChannel(channel);
    setIsSheetOpen(true);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <>
      <Background />
      <main className="page">
        <header className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Self learning</p>
            <h1>YouTube learning channels</h1>
            <p>
              Sorted by priority. Each card shows where the channel helps next
              in your learning path.
            </p>
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? "Light mode" : "Dark mode"}
          </button>
        </header>

        <div className="toolbar">
          <p className="count">{visibleChannels.length} channels</p>
          <div className="toolbar-filters">
            <div className="selected-tags">
              {selectedTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className="selected-chip"
                  onClick={() => removeTag(tag)}
                >
                  <span>{tag}</span>
                  <span aria-hidden="true">×</span>
                </button>
              ))}
            </div>
            <FilterDropdown
              tags={allTags}
              selectedTags={selectedTags}
              onAddTag={addTag}
              onRemoveTag={removeTag}
            />
          </div>
        </div>

        <ChannelList channels={visibleChannels} onOpen={openSheet} />
      </main>

      <ChannelSheet
        channel={selectedChannel}
        isOpen={isSheetOpen}
        onClose={closeSheet}
      />
    </>
  );
}

export default App;
