/**
 * Helper function to get the correct asset path for GitHub Pages deployment
 * @param path - The asset path starting with '/'
 * @returns The asset path (no prefix needed with custom domain)
 */
export function getAssetPath(path: string): string {
  // With custom domain, no basePath prefix is needed
  return path;
}