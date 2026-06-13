import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "AWS Claude Code Blog",
  description: "A blog about building AI-powered applications with Claude Code on AWS",
  keywords: ["AWS", "Claude Code", "AI", "Machine Learning", "Bedrock", "Development"],
  authors: [{ name: "AWS Workshop" }],
  openGraph: {
    title: "AWS Claude Code Blog",
    description: "Learn to build AI-powered applications with Claude Code on AWS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            /* AWS Theme Variables - Inline to bypass MIME type issues with CloudFront proxy */
            :root {
              --aws-orange: #FF9900;
              --aws-dark: #232F3E;
              --aws-blue: #146EB4;
              --aws-light-gray: #F2F3F3;
              --aws-dark-gray: #545B64;
            }

            * { box-sizing: border-box; margin: 0; padding: 0; }

            body {
              font-family: ui-sans-serif, system-ui, sans-serif;
              background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
              color: #232F3E;
              line-height: 1.6;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
            }

            .bg-aws-orange { background-color: var(--aws-orange); }
            .bg-aws-dark { background-color: var(--aws-dark); }
            .bg-aws-blue { background-color: var(--aws-blue); }
            .text-white { color: white; }
            .text-aws-dark-gray { color: var(--aws-dark-gray); }
            .text-aws-light-gray { color: var(--aws-light-gray); }

            .container { max-width: 1200px; margin: 0 auto; }
            .mx-auto { margin-left: auto; margin-right: auto; }
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
            .px-8 { padding-left: 2rem; padding-right: 2rem; }
            .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
            .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
            .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
            .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
            .p-12 { padding: 3rem; }
            .mb-4 { margin-bottom: 1rem; }
            .mb-6 { margin-bottom: 1.5rem; }
            .mb-8 { margin-bottom: 2rem; }
            .mb-16 { margin-bottom: 4rem; }
            .mt-8 { margin-top: 2rem; }
            .mt-auto { margin-top: auto; }

            .text-center { text-align: center; }
            .text-5xl { font-size: 3rem; line-height: 1.2; }
            .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
            .text-2xl { font-size: 1.5rem; line-height: 2rem; }
            .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
            .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
            .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
            .font-bold { font-weight: 700; }
            .font-semibold { font-weight: 600; }

            .rounded-lg { border-radius: 0.5rem; }
            .rounded-3xl { border-radius: 1.5rem; }
            .flex-1 { flex: 1 1 0%; }
            .max-w-4xl { max-width: 56rem; }

            /* Enhanced Navigation Styles */
            .nav-enhanced {
              background: linear-gradient(135deg, #232F3E 0%, #1a252f 100%);
              padding: 1rem 0;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
              position: sticky;
              top: 0;
              z-index: 1000;
              backdrop-filter: blur(10px);
            }

            .logo-link {
              text-decoration: none;
              transition: transform 0.3s ease;
            }

            .logo-link:hover {
              transform: scale(1.05);
            }

            .logo-aws {
              text-shadow: 0 2px 4px rgba(255, 153, 0, 0.3);
            }

            .nav-link {
              color: white;
              font-weight: 600;
              text-decoration: none;
              padding: 0.5rem 1rem;
              border-radius: 0.5rem;
              transition: all 0.3s ease;
              position: relative;
            }

            .nav-link:hover {
              color: var(--aws-orange);
              background-color: rgba(255, 153, 0, 0.1);
            }

            .nav-link::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              width: 0;
              height: 2px;
              background: var(--aws-orange);
              transition: all 0.3s ease;
              transform: translateX(-50%);
            }

            .nav-link:hover::after {
              width: 80%;
            }

            /* Hero gradient background */
            .hero-gradient {
              background: linear-gradient(135deg, #FF9900 0%, #ff8800 50%, #FF9900 100%);
              box-shadow: inset 0 -2px 10px rgba(0, 0, 0, 0.1);
            }

            /* Fade-in animation */
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .fade-in {
              animation: fadeIn 0.8s ease-out;
            }

            button, a.button {
              cursor: pointer;
              border: none;
              transition: all 0.3s ease;
              display: inline-block;
              text-decoration: none;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
              position: relative;
              overflow: hidden;
            }

            button:hover.bg-aws-dark,
            a.button:hover.bg-aws-dark {
              background-color: var(--aws-blue);
              transform: translateY(-3px);
              box-shadow: 0 6px 20px rgba(20, 110, 180, 0.4);
            }

            button:active, a.button:active {
              transform: translateY(-1px);
            }

            /* Blog Post Components */
            .post-card {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              border: 1px solid #e5e7eb;
              border-radius: 0.75rem;
              background: white;
              overflow: hidden;
            }

            .post-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 8px 24px rgba(20, 110, 180, 0.15);
              border-color: var(--aws-blue);
            }

            .hover-aws-blue:hover {
              color: var(--aws-blue);
            }

            .hover-link {
              color: var(--aws-dark);
              text-decoration: none;
              transition: color 0.3s ease;
            }

            .hover-link:hover {
              color: var(--aws-blue);
            }

            .line-clamp-3 {
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }

            .category-badge, .tag-badge, .filter-tag {
              display: inline-block;
              padding: 0.25rem 0.75rem;
              border-radius: 1rem;
              font-size: 0.75rem;
              font-weight: 600;
              letter-spacing: 0.025em;
              transition: all 0.2s ease;
            }

            .category-badge {
              background: linear-gradient(135deg, var(--aws-orange), #ffaa33);
              color: white;
              box-shadow: 0 2px 4px rgba(255, 153, 0, 0.2);
            }

            .tag-badge {
              background-color: var(--aws-light-gray);
              color: var(--aws-dark);
              border: 1px solid #d1d5db;
            }

            .tag-badge:hover {
              background-color: var(--aws-blue);
              color: white;
              border-color: var(--aws-blue);
            }

            /* Grid System */
            .grid {
              display: grid;
            }

            .grid-cols-1 {
              grid-template-columns: repeat(1, minmax(0, 1fr));
            }

            .gap-2 { gap: 0.5rem; }
            .gap-4 { gap: 1rem; }
            .gap-6 { gap: 1.5rem; }

            /* Form Elements */
            .search-input, .filter-select {
              outline: none;
              transition: border-color 0.3s ease;
            }

            .search-input:focus, .filter-select:focus {
              border-color: var(--aws-orange);
            }

            /* Loading Spinner */
            .spinner {
              border: 3px solid var(--aws-light-gray);
              border-top: 3px solid var(--aws-orange);
              border-radius: 50%;
              width: 40px;
              height: 40px;
              animation: spin 1s linear infinite;
              margin: 0 auto;
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }

            /* Flex Utilities */
            .flex {
              display: flex;
            }

            .flex-wrap {
              flex-wrap: wrap;
            }

            .items-center {
              align-items: center;
            }

            .justify-between {
              justify-content: space-between;
            }

            .block {
              display: block;
            }

            .w-full {
              width: 100%;
            }

            /* Prose - Markdown Content Styling */
            .prose {
              color: var(--aws-dark);
              line-height: 1.8;
            }

            .prose h1, .prose h2, .prose h3, .prose h4 {
              color: var(--aws-dark);
              font-weight: 700;
              margin-top: 2rem;
              margin-bottom: 1rem;
            }

            .prose h1 { font-size: 2.5rem; }
            .prose h2 { font-size: 2rem; }
            .prose h3 { font-size: 1.5rem; }
            .prose h4 { font-size: 1.25rem; }

            .prose p {
              margin-bottom: 1.5rem;
            }

            .prose a {
              color: var(--aws-blue);
              text-decoration: underline;
            }

            .prose a:hover {
              color: var(--aws-orange);
            }

            .prose code {
              background-color: var(--aws-light-gray);
              padding: 0.2rem 0.4rem;
              border-radius: 0.25rem;
              font-family: 'Fira Code', monospace;
              font-size: 0.9em;
            }

            .prose pre {
              background-color: var(--aws-dark);
              color: var(--aws-light-gray);
              padding: 1.5rem;
              border-radius: 0.5rem;
              overflow-x: auto;
              margin-bottom: 1.5rem;
            }

            .prose pre code {
              background-color: transparent;
              padding: 0;
              color: var(--aws-light-gray);
            }

            .prose ul, .prose ol {
              margin-bottom: 1.5rem;
              padding-left: 2rem;
            }

            .prose li {
              margin-bottom: 0.5rem;
            }

            .prose blockquote {
              border-left: 4px solid var(--aws-orange);
              padding-left: 1rem;
              margin: 1.5rem 0;
              font-style: italic;
              color: var(--aws-dark-gray);
            }

            .prose img {
              max-width: 100%;
              height: auto;
              border-radius: 0.5rem;
              margin: 1.5rem 0;
            }

            .prose table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 1.5rem;
            }

            .prose th, .prose td {
              border: 1px solid var(--aws-light-gray);
              padding: 0.75rem;
              text-align: left;
            }

            .prose th {
              background-color: var(--aws-light-gray);
              font-weight: 600;
            }

            .hover-aws-orange:hover {
              color: var(--aws-orange);
            }

            /* Mobile responsive styles */
            @media (min-width: 768px) {
              .md-grid-cols-2 {
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }
              .sm-w-auto {
                width: auto;
              }
            }

            @media (min-width: 1024px) {
              .lg-grid-cols-3 {
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }
            }

            @media (max-width: 767px) {
              .text-5xl { font-size: 2rem; line-height: 1.2; }
              .text-xl { font-size: 1rem; line-height: 1.5; }
              .py-12 { padding-top: 2rem; padding-bottom: 2rem; }
              .py-16 { padding-top: 2.5rem; padding-bottom: 2.5rem; }
              .px-8 { padding-left: 1.5rem; padding-right: 1.5rem; }
              .mb-6 { margin-bottom: 1rem; }
              .mb-8 { margin-bottom: 1.5rem; }
              a.button {
                width: 100%;
                text-align: center;
              }
            }
          `
        }} />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <footer className="bg-aws-dark text-aws-light-gray py-6 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              Built with Claude Code on AWS | Workshop Exercise
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
