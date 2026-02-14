"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GlassmorphismCard from "@/components/glassmorphism-card";
import MouseMoveEffect from "@/components/mouse-move-effect";
import Hero from "@/components/hero";
import { Play, ArrowRight, Loader2 } from "lucide-react";
import {
  getVideoProjectsByCategory,
  getVideoCategoriesWithCountIncludingAll,
} from "@/lib/helper";
import type { VideoProject } from "@/types/videos";

const categories = getVideoCategoriesWithCountIncludingAll();

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayedProjects, setDisplayedProjects] = useState<VideoProject[]>([]);
  const [allProjects, setAllProjects] = useState<VideoProject[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const ITEMS_PER_PAGE = 9;

  useEffect(() => {
    const projects = getVideoProjectsByCategory(selectedCategory);
    setAllProjects(projects);
    setDisplayedProjects(projects.slice(0, ITEMS_PER_PAGE));
    setCurrentPage(1);
    setHasMore(projects.length > ITEMS_PER_PAGE);
  }, [selectedCategory]);

  const loadMoreProjects = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const startIndex = (nextPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      const newProjects = allProjects.slice(startIndex, endIndex);

      setDisplayedProjects((prev) => [...prev, ...newProjects]);
      setCurrentPage(nextPage);
      setHasMore(endIndex < allProjects.length);
      setLoading(false);
    }, 500);
  }, [currentPage, allProjects, loading, hasMore]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <MouseMoveEffect />
      <Hero />

      <section id="projects" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              My Video Projects
            </h2>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={`/project/${project.id}`}>
                  <GlassmorphismCard className="h-full group">
                    <div className="flex flex-col h-full p-5">
                      
                      {/* Thumbnail */}
                      <div className="relative overflow-hidden rounded-2xl aspect-video mb-5">
                        <Image
                          src={`/cover_img/${project.cover_image}.png`}
                          alt={project.video_title}
                          width={600}
                          height={338}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {project.duration && (
                          <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                            {project.duration}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-xl font-bold mb-3 text-white">
                          {project.video_title}
                        </h3>

                        {/* Description (only if exists) */}
                        {project.video_description && (
                          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                            {project.video_description}
                          </p>
                        )}

                        <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">

                          {/* Client & Date (ONLY IF EXISTS) */}
                          {(project.client_name || project.publish_date) && (
                            <div className="flex flex-col text-xs text-gray-400">
                              
                              {project.client_name && (
                                <span>{project.client_name}</span>
                              )}

                              {project.publish_date && (
                                <span>
                                  {new Date(project.publish_date).toLocaleDateString(
                                    "en-US",
                                    {
                                      year: "numeric",
                                      month: "short",
                                      day: "numeric",
                                    }
                                  )}
                                </span>
                              )}

                            </div>
                          )}

                          {/* Categories */}
                          <div className="flex gap-1">
                            {project.category?.slice(0, 2).map((cat) => (
                              <Badge
                                key={cat}
                                variant="secondary"
                                className="text-xs"
                              >
                                {cat}
                              </Badge>
                            ))}
                          </div>

                        </div>
                      </div>
                    </div>
                  </GlassmorphismCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {selectedCategory === "All" && hasMore && (
            <div className="text-center mt-16">
              <Button onClick={loadMoreProjects} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={16} />
                    Loading...
                  </>
                ) : (
                  <>
                    Load More
                    <ArrowRight className="ml-2" size={16} />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}