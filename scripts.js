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
