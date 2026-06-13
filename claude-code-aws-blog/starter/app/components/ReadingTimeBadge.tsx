import { calculateReadingTime, formatReadingTime } from '../lib/readingTime';

interface ReadingTimeBadgeProps {
  content: string;
}

export default function ReadingTimeBadge({ content }: ReadingTimeBadgeProps) {
  const readingTime = calculateReadingTime(content);
  const formattedTime = formatReadingTime(readingTime);

  return (
    <div className="reading-time-badge inline-flex items-center gap-1.5 text-aws-dark-gray text-sm font-medium">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="16"
        height="16"
        aria-hidden="true"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
      <span>{formattedTime}</span>
    </div>
  );
}
