# RFCI-BE-Miftakh-Ali-Said
daftar kesalahan
1. file env kurang .
2. script const envFound = dotenv.config(); berada di bawah, harus diatas karena syncronus
3. module.exports = {config}; config didalam object jadi saat di panggil di app.js undifined, jadi diubah menjadi module.exports = config;
4. redirecUri isnot function 
di dir service/authService
module.export = {
    redirectUri: redirectUri => ditambahi ()
}
di app.js
const auth = authService.redirectUri(); => () dihilangkan