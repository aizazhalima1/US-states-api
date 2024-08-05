
const express = require('express')
const app = express()
const cors= require('cors')
const PORT = 8000
app.use(cors())

const states={
    'AL':{
        'fullName':'Alabama'},
    'AK':{
        'fullName':'Alaska'},
    'AZ':{
        'fullName':'Arizona'},
    'AR':{
        'fullName':'Arkansas'},
    'AS':{
        'fullName':'American Samoa'},
    'CA':{
        'fullName':'California'},
    'CT':{
        'fullName':'Connecticut'}, 
    'CO':{
        'fullName':'Colarado'}, 
    'DE':{
        'fullName':'Delaware'}, 
    'DC':{
        'fullName':'District of Columbia'}, 
    'FL':{
        'fullName':'Florida'}, 
    'GA':{
        'fullName':'Georgia'}, 
    'GU':{
        'fullName':'Guam'}, 
    'HI':{
        'fullName':'Hawaii'}, 
    'ID':{
        'fullName':'Idaho'}, 
    'IL':{
        'fullName':'Illinois'}, 
    'IN':{
        'fullName':'Indiana'}, 
    'IA':{
        'fullName':'Iowa'}, 
    'KS':{
        'fullName':'Kansas'}, 
    'KY':{
        'fullName':'Kentucky'}, 
    'LA':{
        'fullName':'Louisiana'}, 
    'ME':{
        'fullName':'Maine'}, 
    'MD':{
        'fullName':'Maryland'}, 
    'MA':{
        'fullName':'Massachusetts'}, 
    'MI':{
        'fullName':'Michigan'}, 
    'MN':{
        'fullName':'Minnesota'}, 
    'MS':{
        'fullName':'Mississippi'}, 
    'MO':{
        'fullName':'Missouri'}, 
    'MT':{
        'fullName':'Montana'}, 
    'NE':{
        'fullName':'Nebraska'}, 
    'NV':{
        'fullName':'Nevada'}, 
    'NH':{
        'fullName':'New Hampshire'}, 
    'NJ':{
        'fullName':'New Jersey'}, 
    'NM':{
        'fullName':'New Mexico'}, 
    'NY':{
        'fullName':'New York'}, 
    'NC':{
        'fullName':'North Carolina'}, 
    'ND':{
        'fullName':'North Dakota'}, 
    'MP':{
        'fullName':'Northern Mariana Islands'},
    'OH':{
        'fullName':'Ohio'},
    'OR':{
        'fullName':'Oregon'},
    'PA':{
        'fullName':'Pennsylvania'},
    'PR':{
        'fullName':'Puerto Rico'},
    'RI':{
        'fullName':'Rhode Island'},
    'SC':{
        'fullName':'South Carolina'},
    'SD':{
        'fullName':'South Dakota'},
    'TN':{
        'fullName':'Tennessee'},
    'TX':{
        'fullName':'Texas'},
    'TT':{
        'fullName':'Trust Territories'},
    'UT':{
        'fullName':'Utah'},
    'VT':{
        'fullName':'Vermont'},
    'VA':{
        'fullName':'Virginia'},
    'VI':{
        'fullName':'Virgin Islands'},
    'WA':{
        'fullName':'Washington'},
    'WV':{
        'fullName':'West Virginia'},
    'WI':{
        'fullName':'Wisconsin'},
    'WY':{
        'fullName':'Wyoming'},
    'Unknown':{
        'fullName':'Unknown'},
    }


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})


app.get('/api/:name',(req,res)=>{
   
    const stName=req.params.name.toUpperCase()
    if(states[stName]){
       res.json(states[stName].fullName)
    }
    else{
      res.json(states['unknown'])
    }
})



app.listen(process.env.PORT||PORT,()=>{
    console.log(`The port is listening on port ${PORT}`)
})