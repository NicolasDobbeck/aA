'use strict'

import { searchArtist, searchMusicStretch, mundialRank,
    searchStretchMusic, discographyArtist, hotSpotInfo,
    lyricsMusic} from "./musicApi.js"

let artista = await searchArtist();
let musica = await searchMusicStretch();
let rank = await mundialRank();
let musicaTrecho = await searchStretchMusic();
let discografia =  await discographyArtist();
let hotSpot = await hotSpotInfo();
let letras = await lyricsMusic();

console.log(artista, musica, rank, hotSpot, letras);