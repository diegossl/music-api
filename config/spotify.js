const SpotifyWebApi = require('spotify-web-api-node')

class SpotifyConfig {
  constructor () {
    this.client = null
  }

  async getClient () {
    if (!this.client) {
      const spotifyApi = new SpotifyWebApi({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET
      })
      const data = await spotifyApi.clientCredentialsGrant()
      spotifyApi.setAccessToken(data.body.access_token)
      this.client = spotifyApi
    }
    return this.client
  }
}

module.exports = new SpotifyConfig()
