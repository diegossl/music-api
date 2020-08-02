const express = require('express')
const Gateway = require('../api/Gateway')

const router = express.Router()

router.post('/artist/info', Gateway.getArtistInfo)

module.exports = router
