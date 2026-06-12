export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-16 mb-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-5xl font-bold text-white mb-6">
              Build AI-Powered Applications with Claude Code on AWS
            </h1>
            <p className="text-xl text-white mb-8">
              Learn how to leverage Claude Code with AWS Bedrock to build intelligent applications.
              Discover integration patterns, MCP servers, CI/CD workflows, and industry best practices
              for AI-powered development.
            </p>
            <a
              href="#posts"
              className="button bg-aws-dark text-white px-8 py-4 rounded-lg font-semibold"
            >
              Explore AWS Bedrock
            </a>
          </div>
        </div>
      </section>

      {/* Post List - Students will build this in Exercise 006 */}
      <section id="posts" className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
        <div className="text-aws-dark-gray">
          <p>Post list will be added in Exercise 006</p>
        </div>
      </section>
    </div>
  );
}
