"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GlassmorphismCard from "@/components/glassmorphism-card";
import {
  ArrowLeft,
  Play,
  Clock,
  User,
  Calendar,
  Quote,
  ExternalLink,
} from "lucide-react";
import { getVideoProjectById, getYouTubeEmbedUrl } from "@/lib/helper";

export default function ProjectPage() {
  const params = useParams();
  const [showVideo, setShowVideo] = useState(false);
  const project = getVideoProjectById(params.id as string);

  if (!project) {
    return (
      <div className="min-h-screen py-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const embedUrl = getYouTubeEmbedUrl(project.video_link);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="mr-2" size={16} />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Video Section */}
        <div className="mb-8">
          <GlassmorphismCard className="p-4 md:p-6">
            <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-900">
              {showVideo && embedUrl ? (
                <iframe
                  src={`${embedUrl}?autoplay=1&modestbranding=1&rel=0`}
                  title={project.video_title}
                  className="w-full h-full"
                  allowFullScreen
                  allow="autoplay; encrypted-media"
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={
                      project.cover_image
                        ? `/cover_img/${project.cover_image}.png`
                        : "/placeholder.svg"
                    }
                    alt={project.video_title}
                    fill
                    className="object-cover"
                  />
                  {embedUrl && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Button
                        onClick={() => setShowVideo(true)}
                        size="lg"
                        className="bg-red-600 hover:bg-red-700"
                      >
                        <Play className="mr-2" size={24} />
                        Play Video
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </GlassmorphismCard>
        </div>

        {/* Project Details */}
        <GlassmorphismCard className="p-6 md:p-8">

          {/* Duration */}
          {project.duration && (
            <div className="flex justify-end mb-4 text-gray-400 text-sm">
              <Clock className="mr-1" size={14} />
              {project.duration}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl font-bold mb-4 text-white">
            {project.video_title}
          </h1>

          {/* Description */}
          {project.video_description && (
            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.video_description}
            </p>
          )}

          {/* Project Details Block */}
          {(project.publish_date || project.client_name) && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-white">
                Project Details
              </h3>
              <div className="space-y-2 text-sm">

                {/* Published Date */}
                {project.publish_date && (
                  <div className="flex items-center text-gray-400">
                    <Calendar className="mr-2" size={14} />
                    <span>
                      {new Date(project.publish_date).toLocaleDateString()}
                    </span>
                  </div>
                )}

                {/* Client */}
                {project.client_name && (
                  <div className="flex items-center text-gray-400">
                    <User className="mr-2" size={14} />
                    <span>{project.client_name}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Software Used */}
          {project.software_used && project.software_used.length > 0 &&  (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-white">
                Software Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.software_used.map((software) => (
                  <Badge key={software} variant="outline">
                    {software}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Categories */}
          {project.category?.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-white">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.category.map((category) => (
                  <Badge key={category} variant="outline">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* YouTube Button */}
          {project.video_link && (
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <a
                href={project.video_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2" size={16} />
                Watch on YouTube
              </a>
            </Button>
          )}
        </GlassmorphismCard>

        {/* Gallery */}
        {project.project_images && project.project_images.length > 0 &&  (
          <div className="mt-16">
            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white text-center">
                Project Gallery
              </h3>
              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                  {project.project_images.map((image, index) => (
                    <CarouselItem key={index} className="basis-1/2">
                      <div className="p-1">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <Image
                            src={image}
                            alt={`Project image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </GlassmorphismCard>
          </div>
        )}

        {/* Client Feedback */}
        {project.client_feedback && (
          <div className="mt-16">
            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white text-center">
                Client Feedback
              </h3>
              <div className="max-w-3xl mx-auto text-center">
                {project.client_image && (
                  <Image
                    src={project.client_image}
                    alt={project.client_name || "Client"}
                    width={64}
                    height={64}
                    className="rounded-full mx-auto mb-4"
                  />
                )}
                {project.client_name && (
                  <p className="font-medium text-white text-lg mb-4">
                    {project.client_name}
                  </p>
                )}
                <blockquote className="text-gray-300 italic text-lg">
                  "{project.client_feedback}"
                </blockquote>
              </div>
            </GlassmorphismCard>
          </div>
        )}
      </div>
    </div>
  );
}