const SpotifyWebApi = require('../../config/spotify')

module.exports = {
  async getArtistInfo (artistName) {
    const spotifyApi = await SpotifyWebApi.getClient()
    const recoveredArtist = await spotifyApi.searchArtists(artistName)

    return {
      name: recoveredArtist.body.artists.items[0].name,
      genres: recoveredArtist.body.artists.items[0].genres,
      popularity: recoveredArtist.body.artists.items[0].popularity,
      spotifyPage: recoveredArtist.body.artists.items[0].uri
    }
  },

  async getAlbumsByArtist (artistName) {
    const spotifyApi = await SpotifyWebApi.getClient()

    const recoveredArtist = await spotifyApi.searchArtists(artistName)
    const artistId = recoveredArtist.body.artists.items[0].id
    const albums = await spotifyApi.getArtistAlbums(artistId)

    const albumsInfo = albums.body.items.map((album) => {
      return {
        name: album.name,
        releaseDate: album.release_date,
        totalTracks: album.total_tracks,
        spotifyPage: album.uri
      }
    })
    return albumsInfo
  }
}
