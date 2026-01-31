// Category filtering
document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');
    const articles = document.querySelectorAll('.card');

    categories.forEach(cat => {
        cat.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active state
            categories.forEach(c => c.classList.remove('active'));
            cat.classList.add('active');

            // Filter articles
            const filter = cat.dataset.filter;
            
            articles.forEach(article => {
                if (filter === 'all') {
                    article.style.display = 'block';
                } else {
                    const articleCats = article.dataset.category.split(' ');
                    article.style.display = articleCats.includes(filter) ? 'block' : 'none';
                }
            });
        });
    });
});
