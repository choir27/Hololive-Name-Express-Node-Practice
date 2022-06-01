const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const hololive = {
    ina:{
    name: 'Ina',
    myth: 'Tako',
    age: 29,
    fandom: 'Takodachi',
    catchphrase: 'Wah!',
    primaryColor: 'Purple'
        }, 
    calli:{
    name: 'Calli',
    myth: 'Reaper',
    age: 26,
    fandom: 'Deadbeats',
    catchprase: 'Guh',
    primaryColor: 'Black'
        },
    mumei:{
        name: 'Mumei',
        myth: 'Owl',
        age: 23,
        fandom: 'Owls',
        catchprase: 'Oh Hello!',
        primaryColor: 'Brown'
            },
    error:{
        name: 'Error',
        myth: 'Error',
        age: 'Error',
        fandom: 'Error',
        catchprase: 'Error',
        primaryColor: 'Error'
            }
}

app.get('/', (request, response) =>{//make a request
    response.sendFile(__dirname + '/index.html')//send a index.html file
})//__dirname is in respect to where the server.js file is located

app.get('/api/:member', (request, response) =>{
    let membersName = request.params.member.toLowerCase() //request is url link, params is short for query parameters (/api/Ina), and member is query parameter variable name
   // response.json(hololive) sends all json data, but we don't have any json to send yet
   if(hololive[membersName]){ //if the inputed query parameter is in the json object hololive
        response.json(hololive[membersName])
   }else{
       response.json(hololive['error'])
   }
})//if we do node server, and go to localserver:8000/api, the json will return

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}!  You better go catch it!`)
})

//need to host this API on heruko