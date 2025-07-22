/**
 * Formats a file size in bytes to a human-readable string
 * @param bytes - The file size in bytes
 * @returns A human-readable string representation of the file size (e.g., '1.5 MB')
 */
export function formatSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  // Handle the case where the size is in bytes (i = 0)
  if (i === 0) return `${bytes} ${sizes[i]}`;

  // Format to 1 decimal place for KB, MB, GB
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
}

export function generateUUID() {
  return crypto.randomUUID();
}
