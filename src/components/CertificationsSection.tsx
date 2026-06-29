"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  { title: "Introduction to Modern AI", issuer: "CISCO" },
  { title: "IoT and Digital Transformation", issuer: "CISCO" },
  { title: "Introduction to Data Science", issuer: "CISCO" },
  { title: "AI Fundamentals", issuer: "CISCO" },
  { title: "Introduction to Cybersecurity", issuer: "CISCO" },
  { title: "Amazon Kinesis Video Streams – Getting Started", issuer: "AWS" },
  { title: "Analyzing, Visualizing, and Gaining Insights from IoT Devices", issuer: "AWS" },
  { title: "AWS IoT Learning Plan", issuer: "AWS" },
  { title: "AWS IoT SiteWise", issuer: "AWS" },
  { title: "Getting Started with AWS IoT", issuer: "AWS" },
  { title: "Handling AWS IoT Device Data and States", issuer: "AWS" },
  { title: "Managing AWS IoT Devices at Scale", issuer: "AWS" },
  { title: "Securely Connecting AWS IoT Devices to the Cloud", issuer: "AWS" },
  { title: "Creator Studio Fundamentals", issuer: "ServiceNow" },
  { title: "Creator Studio Delivery Accreditation", issuer: "ServiceNow" },
  { title: "Predictive Intelligence", issuer: "ServiceNow" },
  { title: "Platform Analytics (PA) Overview", issuer: "ServiceNow" },
  { title: "ServiceNow User Interface Overview", issuer: "ServiceNow" },
  { title: "Introduction to Generative AI", issuer: "ServiceNow" },
  { title: "AI Agents and Automation in Workflows", issuer: "ServiceNow" },
  { title: "Real-world Uses of AI Agents", issuer: "ServiceNow" },
  { title: "How Do AI Agents Learn and Adapt?", issuer: "ServiceNow" },
  { title: "AI Agents vs. Traditional AI", issuer: "ServiceNow" },
  { title: "What is Agentic AI?", issuer: "ServiceNow" },
  { title: "The Future of Agentic AI", issuer: "ServiceNow" },
  { title: "How Do I Build an Enterprise AI Governance Plan?", issuer: "ServiceNow" },
  { title: "AI Essentials", issuer: "ServiceNow" },
  { title: "Understand the Requirements to Implement Now Assist (Generative AI)", issuer: "ServiceNow" },
  { title: "Natural Language Understanding", issuer: "ServiceNow" },
  { title: "What is Machine Learning?", issuer: "ServiceNow" },
  { title: "How Does Generative AI Power Intelligent Automation?", issuer: "ServiceNow" },
  { title: "What Is a Helpdesk?", issuer: "ServiceNow" },
  { title: "What Is a Chatbot?", issuer: "ServiceNow" },
  { title: "Agent Intelligence", issuer: "ServiceNow" },
  { title: "What Is Artificial Intelligence?", issuer: "ServiceNow" }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="w-full py-32 bg-brand-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-7xl font-display font-bold uppercase">
            <span className="text-brand-papaya">Verified</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-silver">
              Expertise
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group h-full min-h-[16rem]"
            >
              <div className="relative w-full h-full glass p-8 rounded-2xl flex flex-col justify-between border-t-2 border-brand-papaya/50 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(255,122,0,0.4)] group-hover:bg-brand-papaya group-hover:border-brand-papaya">
                <div>
                  <Award size={32} className="text-brand-papaya group-hover:text-black mb-4 transition-colors duration-500" />
                  <h3 className="text-xl font-bold text-white group-hover:text-black leading-tight transition-colors duration-500">
                    {cert.title}
                  </h3>
                </div>
                
                <div className="mt-8 pt-4 border-t border-white/10 group-hover:border-black/20 transition-colors duration-500 flex justify-between items-end">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-brand-silver group-hover:text-black/70 mb-1 block transition-colors duration-500">Issued By</span>
                    <p className="text-sm font-display font-bold text-white group-hover:text-black transition-colors duration-500">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
