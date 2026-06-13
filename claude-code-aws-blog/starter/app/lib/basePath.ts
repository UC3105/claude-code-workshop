/**
 * CloudFront proxy path helper
 * Adds /proxy/3000/ prefix to internal navigation URLs for AWS Workshop environment
 */

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '/proxy/3000';

export function withBasePath(path: string): string {
  // Don't add base path if it's an external URL
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Don't add base path if it's already there
  if (path.startsWith(BASE_PATH)) {
    return path;
  }

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${BASE_PATH}${normalizedPath}`;
}
