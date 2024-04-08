const http  = require('http')
const https = require('https')
const options = {
    host: 'orapiweb2.pttor.com',
    port: 443,
    method: 'POST',
    path: '/api/oilprice/search',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
}
function proxyOpenData()
{
    http.request(options,(respobj)=>{
        respobj.setEncoding('utf-8')
        let respdata = ''
        respobj.on("data",(chnk) => {
            respdata += chnk.toString()
        })
        respobj.on("end",() => {
           console.log(respdata)
        })
    })
    request.end()
}
let payload = { 
    "provinceId": 1, 
    "districtId": null, 
          "year": 2021, 
         "month": 2, 
      "pageSize": 20, 
     "pageIndex": 0
  }
payload = JSON.stringify(payload) 

module.exports = 
{
    proxyOpenData
}