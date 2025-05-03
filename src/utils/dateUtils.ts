export function formatDateToMMMDD(dateStr: string) {
  const date = new Date(dateStr);
  // Options: short month (e.g. "May"), 2-digit day (e.g. "02")
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
}

export function formatDateToAgo(dateStr: string) {
  const date = new Date(dateStr);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const y = Math.floor(seconds / (365 * 24 * 60 * 60));
  if (y > 0) return `${y}y`;

  const mo = Math.floor(seconds / (30 * 24 * 60 * 60));
  if (mo > 0) return `${mo}mo`;

  const w = Math.floor(seconds / (7 * 24 * 60 * 60));
  if (w > 0) return `${w}w`;

  const d = Math.floor(seconds / (24 * 60 * 60));
  if (d > 0) return `${d}d`;

  const h = Math.floor(seconds / (60 * 60));
  if (h > 0) return `${h}h`;

  const m = Math.floor(seconds / 60);
  if (m > 0) return `${m}m`;

  return `${seconds}s`;
}
