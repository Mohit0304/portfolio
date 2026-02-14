"use client";

import { motion } from "framer-motion";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mt-0 md:mt-20 mb-6 text-white">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together!
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <GlassmorphismCard className="p-8">
            <h3 className="text-2xl font-semibold mb-8 text-white text-center">
              Contact Information
            </h3>

            <div className="space-y-8">

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:singh.himanshu9080@gmail.com"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    singh.himanshu9080@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <a
                    href="https://wa.me/+918081815891"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    +91 8081815891
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">
                    Lucknow (Uttar Pradesh, India) — Available for Remote
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center space-x-4">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Availability</p>
                  <p className="text-white">Flexible with time</p>
                </div>
              </div>

            </div>
          </GlassmorphismCard>
        </motion.div>

        {/* Why Choose Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <GlassmorphismCard className="p-8">
            <h3 className="text-2xl font-semibold mb-8 text-white text-center">
              Why Choose Me?
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-white">Quick Turnaround</h4>
                <p className="text-gray-400 text-sm">
                  Fast delivery without compromising quality.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-white">Professional Quality</h4>
                <p className="text-gray-400 text-sm">
                  Cinematic edits with attention to detail.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-white">Clear Communication</h4>
                <p className="text-gray-400 text-sm">
                  Regular updates and transparent workflow.
                </p>
              </div>
            </div>
          </GlassmorphismCard>
        </motion.div>

      </div>
    </div>
  );
}