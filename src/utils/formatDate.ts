export const formatDate = (date?: string | null): string =>
  date ? new Date(date).toLocaleString() : "-";
