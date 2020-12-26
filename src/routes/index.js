module.exports = (app) => {
    app.get('/', (req, res) => {
        res.status(200).render('helloWorld/index.ejs', {
        })
    })
    app.get('/helloUser', (req, res) => {
        let userName= req.query['user-name']
        res.status(200).render('helloUser/index.ejs',{
            data: {
                name: userName
            }
        })
    })
}