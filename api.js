import Enveloop from "enveloop"

const enveloop = new Enveloop({ apiKey: "nuestra-api-key" })

enveloop.sendMessage({
  "template": "nombre-plantilla", 
  "to": "isaac@gmail.com",
  "from": "My App <me@myapp.com>",
  "subject": "Tema",
  "templateVariables": { 
    "url": null 
  } 
})

.then(res => console.log(res))
.catch(err => console.log(err))