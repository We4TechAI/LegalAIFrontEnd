export function formatMessage(text: string): string {
  if (!text) return '';
  return text.replace(/\*\*/g, '');
}