# Project Structure

## Current Folder Organization

```
thedesicorporategirl.github.io/
│
├── Root Directory (GitHub Pages compatible)
│   ├── index.html              # Homepage (must stay in root)
│   ├── about.html              # About page
│   ├── blog.html               # Blog listing page
│   ├── contact.html            # Contact page
│   ├── header.html             # Reusable header component
│   ├── footer.html             # Reusable footer component
│   ├── styles.css              # Main stylesheet
│   ├── logo.png                # Site logo
│   ├── README.md               # Project readme
│   └── WEBSITE-SUMMARY.md      # Website summary
│
├── BlogPages/                  # Blog post articles
│   ├── post-career-growth.html
│   ├── post-leadership-skills.html
│   └── post-template.html      # Template for new blog posts
│
├── Utilities/                  # JavaScript utilities
│   ├── scripts.js              # Main JavaScript file
│   └── blog-posts-data.js      # Blog posts metadata
│
└── NavigationBar/              # Empty (reserved for future use)

```

## Path References

### From Root Pages (index.html, blog.html, about.html, contact.html):
- Styles: `styles.css`
- Logo: `logo.png`
- Scripts: `Utilities/scripts.js`
- Blog data: `Utilities/blog-posts-data.js`
- Header/Footer: `header.html`, `footer.html`
- Blog posts: `BlogPages/post-*.html`

### From Blog Pages (in BlogPages folder):
- Styles: `../styles.css`
- Logo: `../logo.png`
- Scripts: `../Utilities/scripts.js`
- Back to blog: `../blog.html`
- Header/Footer: `../header.html`, `../footer.html` (auto-adjusted by scripts.js)

## Key Features

1. **Dynamic Header/Footer Loading**: 
   - `scripts.js` automatically loads header and footer
   - Adjusts paths based on current folder location
   - Sets active navigation link automatically

2. **Automatic Read Time Calculation**:
   - Calculates read time based on word count
   - Uses 200 words per minute standard

3. **Centralized Blog Data**:
   - `blog-posts-data.js` contains all blog metadata
   - Blog listing page dynamically generates from this data

## Adding New Blog Posts

1. Copy `BlogPages/post-template.html`
2. Rename it (e.g., `post-new-topic.html`)
3. Replace placeholders with your content
4. Add entry to `Utilities/blog-posts-data.js`:
   ```javascript
   {
       url: 'BlogPages/post-new-topic.html',
       title: 'Your Blog Title',
       date: 'Month Day, Year',
       image: 'https://your-image-url.com',
       imageAlt: 'Image description',
       excerpt: 'Brief description...'
   }
   ```

## Updating Header or Footer

Edit `header.html` or `footer.html` in the root directory. Changes will automatically apply to all pages.

## GitHub Pages Compatibility

✅ index.html remains in root directory (required for GitHub Pages)
✅ All paths use relative references
✅ Structure supports proper GitHub Pages hosting at https://thedesicorporategirl.github.io/
