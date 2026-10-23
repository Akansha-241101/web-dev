import { useEffect, useRef, useState } from "react";

function FilterDropdown({ tags, selectedTags, onAddTag, onRemoveTag }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        type="button"
        className="dropdown-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span>Add tag</span>
        <span aria-hidden="true">{isOpen ? "▴" : "▾"}</span>
      </button>

      {isOpen ? (
        <div className="dropdown-menu" role="listbox">
          {tags.map((tag) => {
            const isSelected = selectedTags.includes(tag);

            return (
              <button
                key={tag}
                type="button"
                className={`dropdown-option${isSelected ? " is-active" : ""}`}
                onClick={() => {
                  if (isSelected) {
                    onRemoveTag(tag);
                  } else {
                    onAddTag(tag);
                  }
                  setIsOpen(false);
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default FilterDropdown;
