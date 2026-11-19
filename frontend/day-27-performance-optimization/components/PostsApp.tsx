"use client";

import { useState } from "react";
import { PostCard } from "./PostCard";
import { PostComposer } from "./PostComposer";
import type { Post } from "@/types/post";

export function PostsApp() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddPost = () => {
    const description = inputValue.trim();
    if (!description) return;

    setPosts((prev) => [
      {
        id: crypto.randomUUID(),
        description,
        reaction: "",
      },
      ...prev,
    ]);
    setInputValue("");
  };

  const handleRemovePost = (id: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleReactionClick = (id: string, emoji: string) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        return {
          ...p,
          reaction: emoji === p.reaction ? "" : emoji,
        };
      }),
    );
  };

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 px-4 py-8 sm:gap-5 sm:px-6 sm:py-10 lg:px-0">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Posts
        </h1>
        <p className="text-sm text-muted sm:text-base">
          Write, react, and manage posts independently.
        </p>
      </header>

      <PostComposer
        value={inputValue}
        onChange={setInputValue}
        onSubmit={handleAddPost}
      />

      <section className="flex flex-col gap-3 sm:gap-4" aria-live="polite">
        {posts.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border-strong bg-surface-muted px-4 py-8 text-center text-sm text-muted sm:text-base">
            No posts yet. Write something and hit Post.
          </p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onRemove={handleRemovePost}
              onReactionClick={handleReactionClick}
            />
          ))
        )}
      </section>
    </div>
  );
}
