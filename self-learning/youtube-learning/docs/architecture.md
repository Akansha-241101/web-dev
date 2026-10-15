# Architecture

Frontend-only React app. No backend. No Tailwind.

## Stack

- React + Vite
- Custom CSS with CSS variables

## Folders

```
youtube-learning/
  docs/
  src/
    App.jsx
    main.jsx
    index.css
    constants/channels.js
    components/
      Background.jsx
      FilterDropdown.jsx
      ChannelCard.jsx
      ChannelList.jsx
      ChannelSheet.jsx
```

## Data

- `channels` array in `src/constants/channels.js`
- Each channel has: `id`, `priority`, `name`, `handle`, `url`, `overview`, `tags`
- List is sorted with `.sort((a, b) => a.priority - b.priority)`
- Filter uses `.filter` on tags

## UI flow

1. App sorts and filters channels
2. ChannelCard click opens ChannelSheet
3. Overlay / Esc / close button closes the sheet
4. FilterDropdown closes on outside click
