module.exports = (app) => {
    app.get('/', (req, res) => {
        res.status(200).render('homepage/index.ejs')
    })
    app.get('/basket', (req, res) => {
        res.status(200).render('basket/index.ejs')
    })
    app.get('/home', (req, res) => {
        res.status(200).render('home/index.ejs')
    })
}