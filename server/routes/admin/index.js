module.exports = app => {
    const express = require('express') // call
    const router = express.Router() // init router instance
    const Category = require('../../models/Category')
    router.post('/categories', async (req, res) => {
        const model = await Category.create(req.body)
        res.send(model)
    })
    app.use('/admin/api', router)
}