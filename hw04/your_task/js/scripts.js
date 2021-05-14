const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    const q = document.querySelector('#search').value
    let url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${q}&limit=5`
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then (tracks => {
            console.log(tracks);
            document.querySelector('.track-item').innerHTML = "";
            if (tracks.length !== 0){
                for (const track of tracks) {
                    console.log(track.name);
                    document.querySelector('.track-item').innerHTML +=
                    `<div> 
                        <section class="track-item preview"
                        data-preview-track="${track.preview_url}">
                        <img src="${track.album.image_url}">
                        <i class="fas play-track fa-play" aria-hidden="true"></i>
                    <div class="label">
                    <h3>${track.name}</h3>
                    <p>${track.artist.name}</p>
                    </div>
                    </section>
                    </div>`;
                }
            }
            else {
                document.querySelector('.track-item').innerHTML = "<p>No tracks found that match your search criteria.</p>"
            }
        });
};


const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
};

const getArtist = (term) => {
    const q = document.querySelector('#search').value
    let url = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${q}&limit=1`
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then (artists => {
            console.log(artists);
            if (artists.length !== 0){
                document.querySelector('.artist-card').innerHTML = "";
                for (const artist of artists) {
                    console.log(artist.name);
                    document.querySelector('.artist-card').innerHTML +=
                    `<div>
                    <img src="${artist.image_url}">
                    <h3>${artist.name}</h3><br>
                    <div class="footer">
                        <a href="${artist.spotify_url}">
                        View on Spotify
                        </a>
                    </div>
                    </div>`;
                }
            }
            else {
                document.querySelector('.artist-card').innerHTML = "<p>No artists found that match your search criteria.</p>"
            }
        });
};

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};