const bcrypt =require('bcryptjs')
const moment =require('moment')
const jwt = require('jsonwebtoken')
 const util ={createAccessToken: async (user) =>{
      try {
        let partnerToken = {};
        partnerToken.partnerName = user.UserName;
        partnerToken.exp = moment().add((process.env.TOKEN_EXPIRES_IN_MINUTES || 10), 'minutes').valueOf();
        partnerToken.id = user.UserName;
        
  
        let signedToken = jwt.sign({ data: partnerToken },"publicKey", {
        });
  
        
        let expiryDate = moment().add((process.env.TOKEN_EXPIRES_IN_MINUTES || 10), 'minutes').toString();
        // Create the code access token response
        let   partnersAccessToken ={};
  
        partnersAccessToken.expires_in = new Date(expiryDate);
        partnersAccessToken.access_token = signedToken;
  
  
        return {
          user,
          token: partnersAccessToken,
        };
      } catch (err) {
        throw new Error(err);
      }
    }}

module.exports = util;