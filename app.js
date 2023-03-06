const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const err404=require('./controllers/error404')

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const product=require('./models/product');
const user=require('./models/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData);
app.use(shopRoutes);

app.use(err404.get404);

product.belongsTo(user,{constraits:true,onDelete:'CASCADE'});
user.hasMany(product);

sequelize
.sync({force: true})
.then(result=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err);  
})

app.listen(3000);
