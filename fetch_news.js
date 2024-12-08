document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "dddcf9c2a1d14f3d9ed7b527a7581f5f"; // Your News API key
    const apiUrl = `https://newsapi.org/v2/everything?q=charity&apiKey=${apiKey}`;

    // Function to fetch news articles
    async function fetchNews() {
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error("Failed to fetch news articles.");
            }

            const data = await response.json();
            displayNews(data.articles);
        } catch (error) {
            console.error(error);
            displayErrorMessage();
        }
    }

    // Function to display news articles on the page
    function displayNews(articles) {
        const newsContainer = document.getElementById("newsContainer");

        articles.forEach((article) => {
            const articleElement = document.createElement("div");
            articleElement.className = "news-article";

            articleElement.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description || "No description available."}</p>
                <a href="${article.url}" target="_blank">Read More</a>
            `;

            newsContainer.appendChild(articleElement);
        });
    }

    // Function to display an error message
    function displayErrorMessage() {
        const newsContainer = document.getElementById("newsContainer");
        newsContainer.innerHTML = `
            <p>Sorry, we couldn't load news articles at this time. Please try again later.</p>
        `;
    }

    // Fetch and display news when the page loads
    fetchNews();
});