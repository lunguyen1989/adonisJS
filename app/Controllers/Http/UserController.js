'use strict'

const User = use('App/Models/User');

class UserController {
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
