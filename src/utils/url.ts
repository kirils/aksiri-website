// Prefix a site path with the deploy base (e.g. /aksiri-website on GitHub Pages).
// Use for every internal link: <a href={url('/contact')}>.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => `${base}${path}`;
