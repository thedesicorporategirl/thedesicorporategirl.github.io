// Auto-calculate reading time based on word count
document.addEventListener('DOMContentLoaded', function() {
    const article = document.querySelector('.post-content-full');
    const readTimeElement = document.getElementById('read-time');
    
    if (article && readTimeElement) {
        // Get the text content and count words
        const text = article.textContent || article.innerText;
        const wordCount = text.trim().split(/\s+/).length;
        
        // Calculate read time (assuming 200 words per minute)
        const wordsPerMinute = 200;
        const readTime = Math.ceil(wordCount / wordsPerMinute);
        
        // Update the read time in the page
        readTimeElement.textContent = readTime;
    }
});

// Function to calculate read time for a given URL (for blogs listing page)
async function calculateReadTimeForPost(postUrl) {
    try {
        const response = await fetch(postUrl);
        const html = await response.text();
        
        // Create a temporary DOM element to parse the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const article = doc.querySelector('.post-content-full');
        
        if (article) {
            const text = article.textContent || article.innerText;
            const wordCount = text.trim().split(/\s+/).length;
            const wordsPerMinute = 200;
            return Math.ceil(wordCount / wordsPerMinute);
        }
        return 0;
    } catch (error) {
        console.error(`Error calculating read time for ${postUrl}:`, error);
        return 0;
    }
}

// Load blog posts dynamically on blog listing page
async function loadBlogPosts() {
    const blogPostsContainer = document.querySelector('.blog-posts');
    
    if (blogPostsContainer && typeof blogPostsData !== 'undefined') {
        // Clear loading message if any
        blogPostsContainer.innerHTML = '';
        
        for (const post of blogPostsData) {
            // Calculate read time for this post
            const readTime = await calculateReadTimeForPost(post.url);
            
            // Create the post card HTML
            const postCard = document.createElement('article');
            postCard.className = 'post-card';
            postCard.innerHTML = `
                <div class="post-image">
                    <img src="${post.image}" alt="${post.imageAlt}">
                </div>
                <div class="post-content">
                    <h3><a href="${post.url}">${post.title}</a></h3>
                    <p class="post-meta">${post.date} • ${readTime} min read</p>
                    <p>${post.excerpt}</p>
                    <a href="${post.url}" class="read-more">Read More →</a>
                </div>
            `;
            
            blogPostsContainer.appendChild(postCard);
        }
    }
}

// Initialize blog posts if on blog listing page
if (document.querySelector('.blog-list')) {
    loadBlogPosts();
}
