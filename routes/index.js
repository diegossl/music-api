const express = require('express')
const Gateway = require('../api/Gateway')

const router = express.Router()

router.get('/artist/:artistName', Gateway.getArtistInfo)

module.exports = router
