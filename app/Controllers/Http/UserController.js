'use strict'

const User = use('App/Models/User');
const Env = use('Env')

const jwt = require('jsonwebtoken');
class UserController {
//generate token for client test
   async generateToken({request, response}) {
    let secret_key = Env.get('SECRET_KEY');
    let app_key = Env.get('SECRET_KEY');
    let data = {
        app_key : app_key,
        version : 1,
        app_name : 'demo adonisjs'
    };
    let option = {
        algorithm: "HS256",
        expiresIn: "1h",
      }
    let token = jwt.sign(data, secret_key, option);
    return response.json({"access_token": token})
   }
   async register({request, response, auth}) {
       let user = await User.create(request.all());
        //generate token for user
       let accessToken = await auth.generate(user);

        return response.json({"user": user, "access_token": accessToken})
   }

   async login({request, response, auth}) {
       let {email, password}  = request.all();
       try {
           if(await auth.attempt(email,password)) {
               let user = await User.findBy('email', email);
               let accessToken = await auth.generate(user);
       
                return response.json({"user": user, "access_token": accessToken})
           }
       } catch(e) {
        return response.json({message: 'You are not registered!'})
       }
   }
}

module.exports = UserController
