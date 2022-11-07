'use strict'

const searchMusicStretch = async (artista, trecho) => {
    const url = `https://api.vagalume.com.br/search.artmus?q=${artista}%20${trecho}%20${trecho}&limit=5`
    const response = await fetch(url);
    const listMusic = await response.json();

    return listMusic
}

const searchArtist = async (artista) => {
    const url = `https://api.vagalume.com.br/search.art?q=${artista}&limit=5`
    const response = await fetch(url);
    const informationArtist = await response.json();

    return informationArtist
}

const mundialRank =  async () => {
    const url = `https://api.vagalume.com.br/rank.php?type=art&period=day&scope=internacional&limit=2&apikey={49ceadc53ecfa55ebc763164efdea653}`
    const response = await fetch(url);
    const listRank = await response.json();

    return listRank
}

const searchStretchMusic = async (trecho) => {
    const url = `URL: https://api.vagalume.com.br/search.excerpt?q=${trecho}%20${trecho}&limit=5`
    const response = await fetch(url);
    const musicExcerpt = await response.json();

    return musicExcerpt
}

const discographyArtist = async (artista) => {
    const url = ` https://www.vagalume.com.br/${artista}/discografia/index.js`
    const response = await fetch(url);
    const discography =  await response.json();

    return discography
}

const hotSpotInfo = async () => {
    const url = `https://api.vagalume.com.br/hotspots.php?apikey={49ceadc53ecfa55ebc763164efdea653}`
    const response = await fetch(url);
    const hotSpot = await response.json();

    return hotSpot
}

const lyricsMusic = async (artista, musica) => {
    const url = `https://api.vagalume.com.br/search.php?art=${artista}&mus=${musica}&apikey={49ceadc53ecfa55ebc763164efdea653}`
    const response = await fetch(url);
    const lryrics = await response.json();

    return lryrics
}

export {
    searchMusicStretch, searchArtist, mundialRank,
    searchStretchMusic, discographyArtist, hotSpotInfo,
    lyricsMusic
}