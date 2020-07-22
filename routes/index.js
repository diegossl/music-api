const express = require('express')
const Gateway = require('../api/Gateway')

const router = express.Router()

router.post('/artist/info', Gateway.getArtistInfo)
router.post('/artist/albums', Gateway.getAlbumsByArtist)

module.exports = router
