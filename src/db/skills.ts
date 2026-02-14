import {
  Award,
  Camera,
  Film,
  Palette,
  Scissors,
  Sparkles,
  Users,
  Layers,
  Volume2,
  Zap,
} from "lucide-react";

export const videoEditingSkills = [
  {
    name: "Adobe Premiere Pro",
    image_link: "/tools/Adobe_Premiere_Pro_CC.png",
    icon: Scissors,
    description:
      "Industry-standard video editing with advanced timelines and multicam workflows",
    color: "text-purple-400",
  },
  {
    name: "DaVinci Resolve",
    image_link: "/tools/DaVinci_Resolve_Studio.png",
    icon: Film,
    description:
      "Professional video editing, cinematic color grading, and audio post-production",
    color: "text-orange-400",
  },
  
  {
    name: "Adobe After Effects",
    image_link: "/tools/Adobe_After_Effects_CC.png",
    icon: Sparkles,
    description:
      "Motion graphics, visual effects, compositing, and animations",
    color: "text-blue-400",
  },
  {
    name: "Adobe Photoshop",
    image_link: "/tools/Adobe_Photoshop_CC.png",
    icon: Palette,
    description:
      "Thumbnail design, posters, graphics creation, and image manipulation",
    color: "text-cyan-400",
  },
  {
    name: "Edius",
    image_link: "/tools/edios.png",
    icon: Layers,
    description:
      "Fast, real-time video editing for broadcast and professional workflows",
    color: "text-red-400",
  },
  {
    name: "CapCut",
    image_link: "/tools/capcut.png",
    icon: Zap,
    description:
      "Quick edits, short-form content, reels, and social media videos",
    color: "text-green-400",
  },
];

export const specializations = [
  {
    title: "YouTube Content Creation",
    skills: [
      "YouTube Video Editing",
      "YouTube Shorts Editing",
      "Thumbnail Design",
      "Analytics Understanding",
    ],
    icon: "🎬",
    description:
      "Specialized in creating engaging YouTube content that keeps viewers watching",
  },
  {
    title: "Social Media Videos",
    skills: [
      "Short-form Content",
      "Vertical Video",
      "Platform Optimization",
      "Viral Techniques",
    ],
    icon: "📱",
    description:
      "Expert in creating content optimized for Instagram Reels, Moj, and other platforms",
  },
  {
    title: "Coorporate Documentaries",
    skills: [
      "Professional Presentation",
      "Brand Consistency",
      "Clean Aesthetics",
      "Message Clarity",
    ],
    icon: "🏢",
    description:
      "Creating polished corporate content that communicates effectively",
  },
  {
    title: "Educational Content",
    skills: [
      "Screen Recording",
      "Tutorial Structure",
      "Clear Explanations",
      "Interactive Elements",
    ],
    icon: "📚",
    description:
      "Specialized in making complex topics easy to understand through video",
  },
  {
    title: "Motion Graphics",
    skills: [
      "2D Animation",
      "Logo Animation",
      "Lower Thirds",
      "Kinetic Typography",
    ],
    icon: "✨",
    description: "Creating eye-catching animations that enhance storytelling",
  },
  {
    title: "Color Grading",
    skills: [
      "Cinematic Looks",
      "Color Matching",
      "Mood Creation",
      "Technical Correction",
    ],
    icon: "🎨",
    description:
      "Professional color work that gives videos a polished, cinematic feel",
  },
];

export const achievements = [
  {
    title: "50+ Projects Completed",
    description:
      "Successfully delivered over 100 video projects across various Clients",
    icon: Award,
    color: "text-yellow-400",
  },
  {
    title: "Happy Clients",
    description:
      "Built strong client relationships with positive feedback and lasting partnerships",
    icon: Users,
    color: "text-green-400",
  },
  {
    title: "4+ Years Experience",
    description:
      "Professional video editing experience with continuous skill development",
    icon: Camera,
    color: "text-blue-400",
  },
  {
    title: "Fast Turnaround",
    description:
      "Known for delivering high-quality work within tight deadlines",
    icon: Zap,
    color: "text-purple-400",
  },
];

export const workflow = [
  {
    step: "01",
    title: "Project Analysis",
    description:
      "Understanding client requirements, target audience, and project goals",
  },
  {
    step: "02",
    title: "Content Review",
    description:
      "Analyzing raw footage, identifying key moments, and planning the edit",
  },
  {
    step: "03",
    title: "Rough Cut",
    description:
      "Creating initial edit with basic cuts, transitions, and structure",
  },
  {
    step: "04",
    title: "Fine Tuning",
    description:
      "Adding graphics, color grading, audio enhancement, and effects",
  },
  {
    step: "05",
    title: "Client Review",
    description: "Presenting the work for feedback and implementing revisions",
  },
  {
    step: "06",
    title: "Final Delivery",
    description:
      "Exporting in required formats and delivering the completed project",
  },
];
