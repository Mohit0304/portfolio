import { clientsData } from "@/db/clients";
import { allVideoProjects } from "@/db/projects";
import { Client, VideoProject } from "@/types/videos";

// Helper function to safely get timestamp
const getSafeDate = (date?: string): number => {
  if (!date) return 0;
  const parsed = new Date(date).getTime();
  return isNaN(parsed) ? 0 : parsed;
};

// Get all projects sorted by date (latest first)
export const getAllVideoProjects = (): VideoProject[] => {
  return [...allVideoProjects].sort(
    (a, b) => getSafeDate(b.publish_date) - getSafeDate(a.publish_date)
  );
};

// Get projects by category sorted by date
export const getVideoProjectsByCategory = (
  category: string
): VideoProject[] => {
  const projects =
    category === "All"
      ? allVideoProjects
      : allVideoProjects.filter((project) =>
          project.category?.includes(category)
        );

  return [...projects].sort(
    (a, b) => getSafeDate(b.publish_date) - getSafeDate(a.publish_date)
  );
};

// Get project by ID
export const getVideoProjectById = (
  id: string
): VideoProject | undefined => {
  return allVideoProjects.find((project) => project.id === id);
};

// Get all unique categories
export const getVideoCategories = (): string[] => {
  const categoriesSet = new Set<string>();

  allVideoProjects.forEach((project) => {
    project.category?.forEach((cat) => categoriesSet.add(cat));
  });

  return Array.from(categoriesSet);
};

// Categories with count
export const getVideoCategoriesWithCount = (): {
  category: string;
  count: number;
}[] => {
  const categoryCountMap = new Map<string, number>();

  allVideoProjects.forEach((project) => {
    project.category?.forEach((cat) => {
      categoryCountMap.set(cat, (categoryCountMap.get(cat) || 0) + 1);
    });
  });

  return Array.from(categoryCountMap.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
};

export const getVideoCategoriesWithCountIncludingAll = (): {
  category: string;
  count: number;
}[] => {
  const categoryCounts = getVideoCategoriesWithCount();
  const total = allVideoProjects.length;

  return [{ category: "All", count: total }, ...categoryCounts];
};

export function getFeaturedProjects(limit = 6): VideoProject[] {
  return getAllVideoProjects().slice(0, limit);
}

export function getClients(): Client[] {
  return clientsData;
}

// YouTube Embed URL
export const getYouTubeEmbedUrl = (url?: string): string | null => {
  if (!url) return null;

  if (url.includes("youtube.com/shorts/")) {
    const match = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  }

  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );

  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};