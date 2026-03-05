"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import MediaAbout from "@/components/sections/about/MediaAbout";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Sparkles, CheckCircle, Star, BookOpen, Brain, Heart, MessageCircle, Globe, Zap, Shield, Wifi, Lock, MessageSquare, HelpCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="largeSizeMediumTitles"
      background="none"
      cardStyle="gradient-mesh"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="IslamicHub"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Learning", id: "learning" },
            { name: "Tools", id: "tools" },
            { name: "Wellness", id: "wellness" },
          ]}
          button={{ text: "Download App", href: "https://example.com/download" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="Your Complete Islamic & Educational Companion"
          description="An all-in-one secure app combining Islamic tools, AI-powered learning, mental wellness, productivity tracking, and interactive education with 1100+ integrated features. Fast, lightweight, encrypted, and works offline."
          tag="Super App"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/man-temple_119272-7.jpg?_wi=1", imageAlt: "Islamic Tools Hub" },
            { imageSrc: "http://img.b2bpic.net/free-photo/ancient-books-library-table_23-2147711433.jpg?_wi=1", imageAlt: "Learning Library" },
            { imageSrc: "http://img.b2bpic.net/free-vector/blubot-landing-page-template_52683-2416.jpg", imageAlt: "AI Assistant" },
            { imageSrc: "http://img.b2bpic.net/free-photo/yoga-practice-woman-doing-asana-sunrise_1385-2735.jpg?_wi=1", imageAlt: "Mental Wellness" },
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-vector/goals-habits-tracking-app-screens-collection_23-2148616460.jpg?_wi=1", imageAlt: "Dashboard Interface" },
            { imageSrc: "http://img.b2bpic.net/free-photo/cyber-safety-concept-with-chain-padlock-keyboard-wooden-cubes-white-background-flat-lay_176474-7658.jpg?_wi=1", imageAlt: "Security & Privacy" },
            { imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-child-adult-playing-with-educational-wooden-cubes-floor_181624-28706.jpg?_wi=1", imageAlt: "Kids Safe Mode" },
            { imageSrc: "http://img.b2bpic.net/free-photo/ancient-books-library-table_23-2147711433.jpg?_wi=2", imageAlt: "Learning Features" },
          ]}
          carouselPosition="right"
          buttons={[
            { text: "Get Started", href: "https://example.com/download" },
            { text: "Learn More", href: "#features" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSixteen
          title="Why Choose IslamicHub?"
          description="Experience the difference with our comprehensive Islamic education and wellness platform"
          tag="Key Advantages"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          negativeCard={{
            items: [
              "Limited offline access",              "No privacy protection",              "Heavy battery drain",              "No customization",              "Scattered features"],
          }}
          positiveCard={{
            items: [
              "Full offline functionality",              "Military-grade encryption",              "Optimized performance",              "Custom themes & fonts",              "1100+ integrated features"],
          }}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Download Now", href: "https://example.com/download" }]}
        />
      </div>

      <div id="islamic-tools" data-section="islamic-tools">
        <ProductCardFour
          title="Islamic Tools Hub"
          description="Advanced spiritual tools including Tasbeeh counter, prayer times, Qibla direction, and daily Adhkar"
          tag="Core Features"
          tagIcon={Star}
          tagAnimation="slide-up"
          products={[
            {
              id: "tasbeeh",              name: "Smart Tasbeeh Counter",              price: "Free",              variant: "Advanced digital rosary with 3D beads",              imageSrc: "http://img.b2bpic.net/free-photo/man-temple_119272-7.jpg?_wi=2",              imageAlt: "Tasbeeh Counter"},
            {
              id: "prayer-times",              name: "Prayer Time Tracker",              price: "Free",              variant: "Real-time notifications and reminders",              imageSrc: "http://img.b2bpic.net/free-photo/man-temple_119272-7.jpg?_wi=3",              imageAlt: "Prayer Times"},
            {
              id: "qibla",              name: "Qibla Direction Finder",              price: "Free",              variant: "Compass-based direction detection",              imageSrc: "http://img.b2bpic.net/free-photo/man-temple_119272-7.jpg?_wi=4",              imageAlt: "Qibla Compass"},
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[{ text: "Explore Tools", href: "#" }]}
        />
      </div>

      <div id="learning" data-section="learning">
        <MediaAbout
          title="Smart Knowledge Library"
          description="Access over 500+ Islamic books, audiobooks, video lessons, and educational content with highlighting, notes, and bookmarking. Multi-language support with daily recommendations."
          tag="Learning"
          tagIcon={BookOpen}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/ancient-books-library-table_23-2147711433.jpg?_wi=3"
          imageAlt="Knowledge Library"
          useInvertedBackground={false}
          buttons={[{ text: "Browse Library", href: "#" }]}
        />
      </div>

      <div id="ai-assistant" data-section="ai-assistant">
        <MetricCardThree
          title="AI-Powered Learning"
          description="Instant answers to any question with advanced AI supporting religion, science, history, technology, and mental health"
          tag="Ask Me Anything"
          tagIcon={Brain}
          tagAnimation="slide-up"
          metrics={[
            { id: "questions", icon: MessageCircle, title: "Questions", value: "1000+" },
            { id: "languages", icon: Globe, title: "Languages", value: "25+" },
            { id: "features", icon: Zap, title: "Features", value: "1100+" },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[{ text: "Ask Now", href: "#" }]}
        />
      </div>

      <div id="wellness" data-section="wellness">
        <MediaAbout
          title="Mental Wellness Companion"
          description="Daily journaling with mood tracking, breathing exercises, sleep relaxation sessions, and motivational quotes. Private encrypted journal with weekly progress reports."
          tag="Your Companion"
          tagIcon={Heart}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/yoga-practice-woman-doing-asana-sunrise_1385-2735.jpg?_wi=2"
          imageAlt="Mental Wellness"
          useInvertedBackground={false}
          buttons={[{ text: "Start Wellness Journey", href: "#" }]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="App Performance & Security"
          description="Lightning-fast performance, secure encryption, and optimized for all devices"
          tag="Technical Excellence"
          tagIcon={Shield}
          tagAnimation="slide-up"
          metrics={[
            { id: "speed", icon: Zap, title: "Load Time", value: "<1s" },
            { id: "offline", icon: Wifi, title: "Offline Mode", value: "100%" },
            { id: "encryption", icon: Lock, title: "Encryption", value: "AES-256" },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Trusted by Thousands"
          description="Hear from users who have transformed their Islamic education and wellness journey"
          tag="User Stories"
          tagIcon={MessageSquare}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Fatima Al-Rashid, Student",              date: "Date: 15 January 2025",              title: "Transformed My Learning",              quote: "This app has completely changed how I approach Islamic education. The AI assistant answers all my questions instantly, and the offline mode helps me study anywhere. Highly recommend!",              tag: "Education",              avatarSrc: "http://img.b2bpic.net/free-photo/outdoor-shot-young-caucasian-man-with-beard-relaxing-open-air-surrounded-by-beautiful-mountain-setting-rainforest_273609-1855.jpg",              avatarAlt: "Fatima",              imageSrc: "http://img.b2bpic.net/free-photo/ancient-books-library-table_23-2147711433.jpg?_wi=4",              imageAlt: "Learning Experience"},
            {
              id: "2",              name: "Ahmed Hassan, Teacher",              date: "Date: 18 January 2025",              title: "Best Tool for Islamic Instruction",              quote: "As an Islamic teacher, I find this app invaluable. The comprehensive Quranic tools, Tasbeeh counter, and prayer time features make my teaching more effective. The encryption also gives me peace of mind.",              tag: "Teaching",              avatarSrc: "http://img.b2bpic.net/free-photo/outdoor-shot-young-caucasian-man-with-beard-relaxing-open-air-surrounded-by-beautiful-mountain-setting-rainforest_273609-1855.jpg",              avatarAlt: "Ahmed",              imageSrc: "http://img.b2bpic.net/free-photo/man-temple_119272-7.jpg?_wi=5",              imageAlt: "Islamic Tools"},
            {
              id: "3",              name: "Aisha Mohammed, Parent",              date: "Date: 20 January 2025",              title: "Safe for My Children",              quote: "The kids safe mode is fantastic! My children can learn Islamic stories and play educational games while I know they're in a protected environment. The parental controls are intuitive and comprehensive.",              tag: "Family",              avatarSrc: "http://img.b2bpic.net/free-photo/outdoor-shot-young-caucasian-man-with-beard-relaxing-open-air-surrounded-by-beautiful-mountain-setting-rainforest_273609-1855.jpg",              avatarAlt: "Aisha",              imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-child-adult-playing-with-educational-wooden-cubes-floor_181624-28706.jpg?_wi=2",              imageAlt: "Kids Learning"},
            {
              id: "4",              name: "Muhammad Karim, Mental Health Professional",              date: "Date: 22 January 2025",              title: "Perfect for Wellness",              quote: "The mental wellness features combined with Islamic guidance is brilliant. My clients love the journaling system and guided breathing exercises. This bridges the gap between spirituality and psychology perfectly.",              tag: "Wellness",              avatarSrc: "http://img.b2bpic.net/free-photo/outdoor-shot-young-caucasian-man-with-beard-relaxing-open-air-surrounded-by-beautiful-mountain-setting-rainforest_273609-1855.jpg",              avatarAlt: "Muhammad",              imageSrc: "http://img.b2bpic.net/free-photo/yoga-practice-woman-doing-asana-sunrise_1385-2735.jpg?_wi=3",              imageAlt: "Wellness Session"},
            {
              id: "5",              name: "Noor Al-Sayed, Software Developer",              date: "Date: 24 January 2025",              title: "Impressive Technical Implementation",              quote: "As a tech professional, I'm impressed with the app's architecture. The offline functionality, encryption, and cross-device sync work flawlessly. It's clear this was built with user privacy in mind.",              tag: "Technology",              avatarSrc: "http://img.b2bpic.net/free-photo/outdoor-shot-young-caucasian-man-with-beard-relaxing-open-air-surrounded-by-beautiful-mountain-setting-rainforest_273609-1855.jpg",              avatarAlt: "Noor",              imageSrc: "http://img.b2bpic.net/free-photo/cyber-safety-concept-with-chain-padlock-keyboard-wooden-cubes-white-background-flat-lay_176474-7658.jpg?_wi=2",              imageAlt: "Security Features"},
            {
              id: "6",              name: "Leila Hassan, Content Creator",              date: "Date: 26 January 2025",              title: "Game-Changing Productivity",              quote: "With the daily challenges, achievement tracking, and goal-setting features, this app has boosted my productivity significantly. The gamified reward system keeps me motivated while maintaining my Islamic practice.",              tag: "Productivity",              avatarSrc: "http://img.b2bpic.net/free-photo/outdoor-shot-young-caucasian-man-with-beard-relaxing-open-air-surrounded-by-beautiful-mountain-setting-rainforest_273609-1855.jpg",              avatarAlt: "Leila",              imageSrc: "http://img.b2bpic.net/free-vector/goals-habits-tracking-app-screens-collection_23-2148616460.jpg?_wi=2",              imageAlt: "Dashboard Features"},
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[{ text: "Join Community", href: "#" }]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about IslamicHub"
          tag="Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How many features does IslamicHub include?",              content: "IslamicHub includes 1100+ integrated features spanning Islamic tools, AI-powered learning, mental wellness, productivity, education, and security. New features are continuously added based on user feedback."},
            {
              id: "2",              title: "Does the app work offline?",              content: "Yes! IslamicHub fully supports offline functionality for saved content including books, Quranic data, daily Adhkar, journal entries, and saved Q&A responses. Cloud sync occurs automatically when you're back online."},
            {
              id: "3",              title: "How secure is my data?",              content: "Your data is protected with military-grade AES-256 encryption. All sensitive information including journals, personal notes, and authentication data are fully encrypted. We never sell or share your data."},
            {
              id: "4",              title: "What languages does the app support?",              content: "IslamicHub supports 25+ languages including Arabic, English, Urdu, Turkish, Indonesian, and many more. The AI assistant provides answers in your preferred language."},
            {
              id: "5",              title: "Can I use IslamicHub on multiple devices?",              content: "Yes! All your data syncs seamlessly across devices. Your notes, bookmarks, journal entries, and preferences are instantly available on your phone, tablet, and desktop."},
            {
              id: "6",              title: "Is there a kids safe mode?",              content: "Yes! The dedicated kids safe mode provides a protected environment with age-appropriate Islamic stories, educational games, and filtered content. Parents can set controls and monitor activity."},
            {
              id: "7",              title: "How does the AI assistant work?",              content: "Our AI assistant uses advanced algorithms to answer questions on religion, science, history, technology, and mental health. It supports voice-to-text input and can provide both quick summaries and detailed explanations."},
            {
              id: "8",              title: "Can I customize the app's appearance?",              content: "Absolutely! Customize font sizes, choose between multiple color themes, enable dark mode, and personalize your dashboard. The app adapts to your preferences for optimal readability."},
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="IslamicHub"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
