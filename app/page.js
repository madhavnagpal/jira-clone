import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Layout,
  Calendar,
  BarChart,
  ArrowRight,
  Users,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BrandLogo from "@/components/brand-logo";

const faqs = [
  {
    question: "What is Scrum Pulse?",
    answer:
      "Scrum Pulse is an advanced agile project management platform that helps teams monitor and optimize their Scrum workflows in real-time. Our platform provides pulse-like insights into your team's agile rhythm, helping you maintain momentum and deliver value consistently.",
  },
  {
    question: "How does Scrum Pulse compare to other agile tools?",
    answer:
      "Scrum Pulse stands out by focusing on the real-time health of your agile processes. While other tools simply track tasks, we provide dynamic insights into team velocity, sprint health, and workflow patterns. Our unique 'pulse' metrics help teams identify bottlenecks and optimize their agile practices proactively.",
  },
  {
    question: "Is Scrum Pulse suitable for small teams?",
    answer:
      "Absolutely! Scrum Pulse adapts to teams of all sizes. Whether you're a startup with 5 members or an enterprise with multiple Scrum teams, our platform scales seamlessly. Small teams particularly benefit from our intuitive interface and actionable insights that don't require extensive setup or configuration.",
  },
  {
    question: "What key features does Scrum Pulse offer?",
    answer:
      "Scrum Pulse offers innovative features including real-time sprint monitoring, velocity tracking, automated Scrum ceremonies management, team health indicators, predictive sprint analytics, and customizable Agile dashboards. Our unique 'Pulse Metrics' provide instant visibility into your team's agile rhythm and performance.",
  },
  {
    question: "Can Scrum Pulse handle multiple Scrum teams?",
    answer:
      "Yes, Scrum Pulse excels at managing multiple Scrum teams. Our platform provides both team-specific views and organization-wide insights, making it perfect for scaling agile across your organization. You can easily track dependencies, align sprints, and coordinate releases across teams.",
  },
  {
    question: "How quickly can we get started with Scrum Pulse?",
    answer:
      "Getting started with Scrum Pulse is straightforward. Our intelligent onboarding process guides you through setup in minutes, not hours. We offer pre-built templates for common Scrum workflows, and our AI-assisted configuration helps tailor the platform to your team's specific needs.",
  },
];

const features = [
  {
    title: "Real-Time Sprint Monitoring",
    description:
      "Track your sprint's vital signs with live updates and early warning indicators for potential blockers or delays.",
    icon: Layout,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Smart Ceremony Management",
    description:
      "AI-powered planning tools that make your daily standups, sprint planning, and retrospectives more effective and insight-driven.",
    icon: Calendar,
    gradient: "from-purple-500 to-pink-400",
  },
  {
    title: "Pulse Analytics™",
    description:
      "Unique metrics that measure your team's agile rhythm, providing actionable insights to optimize performance and delivery.",
    icon: BarChart,
    gradient: "from-orange-500 to-red-400",
  },
  {
    title: "Team Health Monitoring",
    description:
      "Track team morale, workload balance, and collaboration patterns to maintain a healthy and productive agile environment.",
    icon: Users,
    gradient: "from-green-500 to-emerald-400",
  },
  {
    title: "Predictive Sprint Planning",
    description:
      "AI-powered insights help forecast sprint capacity and identify potential risks before they impact delivery.",
    icon: Brain,
    gradient: "from-yellow-500 to-amber-400",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
          Streamline Your Workflow <br />
          <span className="flex mx-auto gap-3 sm:gap-4 items-center">
            with
            <BrandLogo as="span" size="large" />
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Empower your team with our intuitive project management solution.
        </p>
        <p className="text-xl mb-12 max-w-2xl mx-auto"></p>
        <Link href="/onboarding">
          <Button size="lg" className="mr-4">
            Get Started <ChevronRight size={18} className="ml-1 h-12" />
          </Button>
        </Link>
        <Link href="#features">
          <Button size="lg" variant="outline" className="h-12">
            Learn More
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-20">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Features that Keep Your Team in Rhythm
          </h3>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Powerful tools designed to enhance your agile workflow and keep your
            team performing at their best.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group bg-gray-900/50 backdrop-blur border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`shrink-0 h-12 w-12 rounded-xl bg-gradient-to-r ${feature.gradient} p-2.5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="h-full w-full text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-5">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center px-5">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Ready to Find Your Team's Perfect Rhythm?
          </h3>
          <p className="text-xl mb-12 text-gray-400">
            Join forward-thinking teams using Scrum Pulse to master their agile
            workflow.
          </p>
          <Link href="/onboarding">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
            >
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
