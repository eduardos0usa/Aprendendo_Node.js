const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('handlebars',exphbs.engine()) /* .engine()é um método do Express.js usado para registrar mudança de modelo personalizado. O primeiro argumento é o nome do mecanismo que você deseja registrar, e o segundo argumento é uma função que retorna a lógica para renderizar os templates. */
app.set('view engine','handlebars')/* está configurando a propriedade 'view engine'do aplicativo para usar o mecanismo de modelo Handlebars para renderizar as visualizações. *//* 'view engine'é uma configuração do Express.js que define qual mecanismo de modelo será usado para renderizar os arquivos de visualização.
'handlebars'é o valor que está sendo atribuído à propriedade 'view engine', indicando que os arquivos de visualização devem ser renderizados usando o mecanismo Handlebars. */

app.get('/',(req,res)=>{
    res.render('home',{ layout : false })
})

app.listen(3000,()=>{
    console.log('App funcionando!')
})