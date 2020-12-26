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
    app.get('/helloWorld', (req, res) => {
        let inputName= req.query['input-name']
        res.status(200).render('helloWorld/index.ejs', {
            data: {
                name: inputName
            }
        })
    })
}