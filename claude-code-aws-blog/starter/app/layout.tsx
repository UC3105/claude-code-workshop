import type { Metadata } from "next";
import "./globals.css";

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
              background: #ffffff;
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

            /* Hero gradient background */
            .hero-gradient {
              background: linear-gradient(135deg, #FF9900 0%, #FF9900 100%);
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
            }

            button:hover.bg-aws-dark,
            a.button:hover.bg-aws-dark {
              background-color: var(--aws-blue);
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(35, 47, 62, 0.3);
            }

            /* Mobile responsive styles */
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
