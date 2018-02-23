var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var knex = require('./config');

var router = express.Router();


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

  router.route('/sessions')
    .get(function(req,res){
      knex.select().table('sessions')
    .then(function(collection){
      console.log(collection);
      res.json({
        error:false,
        data: collection
      })
    })
    .catch(function(err){
      res.status(500).json({
        error:true,
        data:{
          message:err.message
        }
      })
    })
  })
  .post(function(req,res){
    knex('sessions').insert(
      {
        open_id: 'SplxlOBeZQQYbYS6WxSbIA',
        uuid: 'SplxlOBeZQQYbYS6WxSbIA',
        skey: 'SplxlOBeZQQYbYS6WxSbIA',
        create_time: '2018-01-30',
        last_visit_time: '2018-01-30',
        session_key: 'SplxlOBeZQQYbYS6WxSbIA',
        user_info: 'SplxlOBeZQQYbYS6WxSbIA'
      }
    ).then(function(id){
        res.json({
          error:false,
          data: id
        })
      })
      .catch(function(err){
        res.status(500).json({
        error:true,
        data:{
          message:err.message
        }
        })
      })
  })

  router.route('/session/:id')
  .get(function(req,res){
    knex('sessions').select().where({'sessions.open_id':req.params.id})
      .then(function(coll){
        res.json({
          error:false,
          data: coll
        })
      })
      .catch(function(err){
        res.status(500).json({
          error:true,
          data:{
            message: err.message
          }
        })
      })
  })

  app.use('/api',router);
  app.listen(3000,function(){
  console.log('Express listening on Port 3000...')
})
