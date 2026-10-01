"use client";
import { useEffect, useState } from "react";

// Progress is saved ONLY in the visitor's own browser (localStorage).
// No accounts, no server. Later, this file is the one place to swap in a real backend.
export type Progress = {
  lessons: Record<string, { score: number; total: number }>; // key: "course/lesson"
  points: number;
};
const KEY = "moneyready-progress-v1";
const empty: Progress = { lessons: {}, points: 0 };

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...empty, ...JSON.parse(raw) } : empty;
  } catch {
    return empty; // storage blocked or corrupted: start fresh
  }
}
export function saveProgress(p: Progress) {
  try { localStorage.setItem(KEY, JSON.stringify(p)); } catch { /* ignore */ }
}
// React hook: components call useProgress() to read saved progress.
export function useProgress() {
  const [progress, setProgress] = useState<Progress>(empty);
  useEffect(() => setProgress(loadProgress()), []);
  return progress;
}

// Save a finished lesson or assessment. Keeps the best score, and gives points only the first time.
export function recordLesson(key: string, score: number, total: number, isAssessment: boolean) {
  const p = loadProgress();
  const prev = p.lessons[key];
  const best = prev ? Math.max(prev.score, score) : score;
  saveProgress({
    lessons: { ...p.lessons, [key]: { score: best, total } },
    points: p.points + (prev ? 0 : isAssessment ? 25 : 10),
  });
}

/** Erase all saved progress in this browser. */
export function clearProgress() {
  try { localStorage.removeItem(KEY); } catch { /* ignore */ }
}
