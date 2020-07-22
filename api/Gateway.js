const ArtistService = require('./services/ArtistService')

module.exports = {
  async getArtistInfo (request, response) {
    try {
      const artistName = request.body.artistName
      const artistInfo = await ArtistService.getArtistInfo(artistName)
      return response.status(200).send(artistInfo)
    } catch (error) {
      return response.status(500).send('Internal system error.')
    }
  },

  async getAlbumsByArtist (request, response) {
    try {
      const artistName = request.body.artistName
      const artistAlbums = await ArtistService.getAlbumsByArtist(artistName)
      return response.status(200).send(artistAlbums)
    } catch (error) {
      return response.status(500).send('Internal system error.')
    }
  }
}
