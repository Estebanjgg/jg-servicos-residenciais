/**
 * Helper function to get the correct asset path for GitHub Pages deployment
 * @param path - The asset path starting with '/'
 * @returns The correct path with basePath prefix in production (only if no custom domain)
 */
export function getAssetPath(path: string): string {
  const isProd = process.env.NODE_ENV === 'production';
  const hasCustomDomain = process.env.GITHUB_PAGES_CUSTOM_DOMAIN === 'true';
  const basePath = isProd && !hasCustomDomain ? '/jg-servicos-residenciais' : '';
  return `${basePath}${path}`;
}