/*
 * @Author: ecitlm
 * @Date:   2017-11-30 22:00:52
 * @Last Modified by: ecitlm
 * @Last Modified time: 2018-04-15 17:06:27
 */
const express = require('express')
const app = express()

module.exports = function() {
  console.log('这里是route config')
  const index = require('../routes/web/index')
  const photo_view = require('../routes/api/photo/photo_view')
  app.use('/', index)
  app.use('/photo_view', photo_view)
}
