document.addEventListener('DOMContentLoaded', function() {
    const feedUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://www.spreaker.com/show/6231808/episodes/feed';
    
    fetch(feedUrl)
        .then(response => response.json())
        .then(data => displayEpisodes(data.items))
        .catch(error => console.error('Error fetching feed:', error));
});

function displayEpisodes(episodes) {
    const container = document.getElementById('episodes');
    container.innerHTML = '';
    
    episodes.forEach(episode => {
        const episodeDiv = document.createElement('div');
        episodeDiv.className = 'episode';
        episodeDiv.innerHTML = `
            <h2>${episode.title}</h2>
            <p>${episode.description}</p>
            <audio controls>
                <source src="${episode.enclosure.link}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        `;
        container.appendChild(episodeDiv);
    });
}
