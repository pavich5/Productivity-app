import { AuthModel } from "../modells/auth.models.js"
  
  export class AuthController {
    static async registerUser(req,res){
        try {
            const newUser = await AuthModel.registerUser(req.body);
            return res.json(newUser);
        } catch (error) {
            console.log(error);
            return res.status(400).send({ msg: error.message });
          }   
    }
    static async loginUser(req, res) {
        try {
          const user = await AuthModel.loginUser(req.body);
          const accessToken = await createAccessToken(user.id);
          res.setHeader(`access-token`, accessToken);
          const refreshToken = await createRefreshToken(user.id);
          res.setHeader(`refresh-token`, refreshToken);
          await AuthModel.saveRefreshToken(user.id, refreshToken); // Use the method here
          return res.json(user);
        } catch (error) {
          console.log(error);
          return res.status(400).send({ msg: error.message });
        }
      }
    

    
    
  }