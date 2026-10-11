<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

Product detail routes render dedicated product-page components while product cards share the site-data list and ProductGrid; this keeps the established card design consistent without forcing every system into a generic detail template.

Technology portfolio data is shared between display-only rows and application imagery; removed technology routes are not recreated, and remaining technology calls to action scroll to the homepage portfolio. This preserves the portfolio experience without obsolete destinations.
Leaf-page canonicals and Open Graph page URLs use relative paths until a public deployment URL is confirmed; this prevents drafts from pointing search engines at an unverified host. Preserve the existing sitemap until its deployment base can be confirmed.
Serve shared favicon metadata from the root route and real square PNG/ICO files from public, including a multi-resolution ICO fallback; this keeps every page and legacy browser on the same crawlable icon.
