const axios = require('axios');	
const Dev = require('../models/Dev');	
const ParseStringAsArray = require('../utils/ParseStringAsArray');	
module.exports = {	

    async index (request, response) {	
        const devs = await Dev.find();	

        return response.json(devs);	
    },	

    async store (request, response) {	
        const { github_username, techs, latitude, longitude} = request.body;	

        let dev = await Dev.findOne({github_username});	

            if(!dev){	

                const ApiResponse = await axios.get(`https://api.github.com/users/${github_username}`)	

                const { name = login, avatar_url, bio} = ApiResponse.data;	

                const techsArray = ParseStringAsArray(techs);	

                const location = {	
                    type: 'Point',	
                    coordinates: [longitude, latitude],	
                }	
                dev = await Dev.create({	
                    github_username,	
                    name,	
                    avatar_url,	
                    bio,	
                    techs: techsArray,	
                    location	
                })	
            }	
        return response.json(dev);	
    },	

    async update(){	
        //Atualizar: BIO, AVATAR, TECNOLOGIAS, NOME, LOCALIZAÇÃO	
    },	

    async destroy(){	
        //Deletar dev	
    }	
} 