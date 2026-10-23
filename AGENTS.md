Product detail routes render dedicated product-page components while product cards share the site-data list and ProductGrid; this keeps the established card design consistent without forcing every system into a generic detail template.

Technology portfolio data is shared between display-only rows and application imagery; removed technology routes are not recreated, and remaining technology calls to action scroll to the homepage portfolio. This preserves the portfolio experience without obsolete destinations.
The public deployment URL is https://advanced-research-hub.vercel.app; keep leaf-page canonical and Open Graph URLs and the sitemap aligned with this confirmed host and the live routes.
Serve shared favicon metadata from the root route and real square PNG/ICO files from public, including a multi-resolution ICO fallback; this keeps every page and legacy browser on the same crawlable icon.
Keep Vercel-served images in `public/images` and videos in `public/videos`, referenced with site-relative `/images/...` and `/videos/...` URLs.
