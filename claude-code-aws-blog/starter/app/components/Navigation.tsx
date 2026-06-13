import Link from 'next/link';
import { withBasePath } from '../lib/basePath';

export default function Navigation() {
  return (
    <nav className="nav-enhanced">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href={withBasePath('/')} className="logo-link">
            <div className="flex items-center">
              <span className="text-aws-orange font-bold text-2xl logo-aws">AWS</span>
              <span className="text-white font-bold text-2xl ml-2">Claude Code Blog</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-6">
            <Link
              href={withBasePath('/')}
              className="nav-link"
            >
              Home
            </Link>
            <Link
              href={withBasePath('/#posts')}
              className="nav-link"
            >
              Posts
            </Link>
            <Link
              href={withBasePath('/about')}
              className="nav-link"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
