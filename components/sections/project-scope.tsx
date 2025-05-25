"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Check,
  Target,
  Lightbulb,
  Book,
  Search,
  FileSearch,
  GitBranch,
  Laptop,
  Brain,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

const sections = {
  "literature-survey": {
    icon: <Book className="h-5 w-5 text-blue-600" />,
    title: "Literature Survey",
    description:
      "Comprehensive review of existing research in AI-Enhanced RAG Systems for educational contexts",
    points: [
      "Analysis of vector databases and multimodal embeddings evolution in information retrieval",
      "Review of modality gap challenges and proposed solutions in educational content",
      "Study of multimodal RAG approaches and personalization frameworks for learning",
      "Examination of anxiety detection techniques through text and voice analysis",
      "Investigation of adaptive feedback mechanisms in personalized learning systems",
    ],
  },
  "research-gap": {
    icon: <Search className="h-5 w-5 text-purple-600" />,
    title: "Research Gap",
    description:
      "Critical gaps identified in current educational AI systems and mental health support",
    points: [
      "Limited integration of multimodal systems addressing both academic and emotional needs",
      "Modality gap challenges in educational contexts with resource constraints",
      "Lack of syllabus-constrained retrieval mechanisms in existing RAG systems",
      "Insufficient real-time adaptive personalization in educational platforms",
      "Missing anxiety-aware educational support integrated with learning systems",
    ],
  },
  "research-problem": {
    icon: <FileSearch className="h-5 w-5 text-red-600" />,
    title: "Research Problems",
    description:
      "Four core research challenges addressed by our integrated multimodal RAG system",
    points: [
      "Semantic Embedding: Developing cost-effective multimodal retrieval addressing modality gap",
      "Knowledge Retrieval: Creating syllabus-constrained, adaptive retrieval for exam preparation",
      "Emotional Detection: Implementing multimodal GAD detection through text and voice analysis",
      "Coping Recommendations: Building personalized anxiety management with RAG integration",
    ],
  },
  objectives: {
    icon: <Target className="h-5 w-5 text-green-600" />,
    title: "Research Objectives",
    description:
      "Comprehensive goals spanning four integrated components of our AI-enhanced system",
    points: [
      "Design hybrid CLIP-MiniLM model for cost-effective multimodal embedding alignment",
      "Develop syllabus-constrained retrieval with real-time personalization and transparency",
      "Create BERT-CNN and CNN-BiLSTM models for multimodal anxiety detection",
      "Implement personalized anxiety management with time tracking and RAG integration",
    ],
  },
  methodology: {
    icon: <GitBranch className="h-5 w-5 text-amber-600" />,
    title: "Methodology",
    description:
      "Multi-component approach combining AI techniques for comprehensive educational support",
    points: [
      "Hybrid embedding methodology integrating CLIP and All-MiniLM-L6-v2 models",
      "Syllabus-aware indexing with dynamic user context encoding and curriculum alignment",
      "Multimodal fusion framework combining text (BERT-CNN) and voice (CNN-BiLSTM) analysis",
      "RAG-integrated feedback system with time tracking and personalized intervention delivery",
    ],
  },
  technologies: {
    icon: <Laptop className="h-5 w-5 text-cyan-600" />,
    title: "Technologies",
    description:
      "Advanced AI stack optimized for resource-constrained educational environments",
    points: [
      "Vector databases with CLIP and All-MiniLM-L6-v2 for multimodal embeddings",
      "BERT-CNN for text analysis and CNN-BiLSTM for speech emotion recognition",
      "RAG framework with syllabus-constrained retrieval and personalization engines",
      "Streamlit frontend with microservices architecture for scalable deployment",
    ],
  },
};

export default function ProjectScope() {
  return (
    <section id="project-scope" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5f6f52] mb-4 font-playfair">
            Project Scope
          </h2>
          <p className="text-lg text-[#5f6f52]/70 max-w-3xl mx-auto">
            A comprehensive AI-Enhanced RAG System addressing information
            overload, personalization challenges, and mental health support in
            student exam preparation
          </p>
        </div>

        <Tabs defaultValue="literature-survey" className="max-w-6xl mx-auto">
          <div className="bg-[#f6eddd]/50 p-1 rounded-lg mb-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 gap-1 bg-transparent">
              {Object.entries(sections).map(([key, section]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="data-[state=active]:bg-white data-[state=active]:text-[#5f6f52] data-[state=active]:shadow-sm px-4 py-2 text-sm text-[#5f6f52]/80 hover:text-[#5f6f52] hover:bg-white/50 transition-all duration-200"
                >
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(sections).map(([key, section]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-[#5f6f52]/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-6">
                    <div className="bg-[#f6eddd] rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {section.icon}
                    </div>
                    <CardTitle className="text-2xl text-[#5f6f52] font-playfair">
                      {section.title}
                    </CardTitle>
                    <CardDescription className="text-[#5f6f52]/70 text-base">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.points.map((point, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Check className="h-5 w-5 text-[#edb246] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-[#5f6f52]/80 leading-relaxed">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Four Component Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <Card className="border-[#5f6f52]/10 shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-blue-500/5 to-transparent">
            <CardHeader className="text-center pb-4">
              <Brain className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-[#5f6f52] text-lg">
                Semantic Embeddings
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-[#5f6f52]/80 text-sm">
                Hybrid CLIP-MiniLM model addressing modality gap in
                cost-effective multimodal retrieval
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#5f6f52]/10 shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-green-500/5 to-transparent">
            <CardHeader className="text-center pb-4">
              <Search className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-[#5f6f52] text-lg">
                Knowledge Retrieval
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-[#5f6f52]/80 text-sm">
                Syllabus-constrained RAG system with real-time personalization
                for exam preparation
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#5f6f52]/10 shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-purple-500/5 to-transparent">
            <CardHeader className="text-center pb-4">
              <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <CardTitle className="text-[#5f6f52] text-lg">
                Emotion Detection
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-[#5f6f52]/80 text-sm">
                Multimodal GAD detection using BERT-CNN and CNN-BiLSTM for text
                and voice analysis
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#5f6f52]/10 shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-[#edb246]/5 to-transparent">
            <CardHeader className="text-center pb-4">
              <Lightbulb className="h-8 w-8 text-[#edb246] mx-auto mb-2" />
              <CardTitle className="text-[#5f6f52] text-lg">
                Adaptive Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-[#5f6f52]/80 text-sm">
                Personalized anxiety management with time tracking and
                RAG-integrated interventions
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Research Impact Summary */}
        <div className="mt-16 bg-gradient-to-r from-[#5f6f52]/10 to-[#edb246]/10 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-[#5f6f52] mb-4 font-playfair">
              Integrated Solution Impact
            </h3>
            <p className="text-[#5f6f52]/80 max-w-4xl mx-auto">
              Our comprehensive approach addresses the multifaceted challenges
              of modern higher education by combining academic support with
              mental health awareness in a unified, cost-effective framework
              suitable for resource-constrained educational environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-[#5f6f52]">300M+</div>
              <div className="text-sm text-[#5f6f52]/70">
                Students affected by anxiety globally
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-[#edb246]">
                4 Components
              </div>
              <div className="text-sm text-[#5f6f52]/70">
                Integrated AI technologies
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">
                Cost-Effective
              </div>
              <div className="text-sm text-[#5f6f52]/70">
                Resource-constrained deployment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
