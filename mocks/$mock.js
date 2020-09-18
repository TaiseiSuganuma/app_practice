/* eslint-disable */
import mockServer from 'axios-mock-server'
import mock0 from './v1/universities'

export default (client) => mockServer([
  {
    path: '/v1/universities',
    methods: mock0
  }
], client, '')
