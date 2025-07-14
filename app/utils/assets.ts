/**
 * Helper function to get the correct asset path for GitHub Pages deployment
 * @param path - The asset path starting with '/'
 * @returns The correct path with basePath prefix when in GitHub Actions
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.GITHUB_ACTIONS ? '/jg-servicos-residenciais' : '';
  return `${basePath}${path}`;
}