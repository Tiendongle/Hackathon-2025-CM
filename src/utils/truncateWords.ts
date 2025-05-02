export function truncateWords(text: string, limit: number) {
  const words = text.split(/\s+/);
  if (words.length <= limit) return { visible: text, hidden: "" };
  return {
    visible: words.slice(0, limit).join(" "),
    hidden: words.slice(limit).join(" "),
  };
}
