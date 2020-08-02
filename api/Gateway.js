const ArtistService = require('./services/ArtistService')

module.exports = {
  async getArtistInfo (request, response) {
    try {
      const artistName = request.body.artistName
      const artistInfo = await ArtistService.getArtistInfo(artistName)
      return response.status(200).send(artistInfo)
    } catch (error) {
      return response.status(500).send('Internal system error')
    }
  }
}
