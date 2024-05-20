//FUNDAMENTALS
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

//ESModules
//default import
//for default import, we can use any name we want
import getEmailfromGmail from './ESModulos/gmailModules.js'
getEmailfromGmail()

//named import
//for named import, we have to use the same name as the exported function.
import { sendEmail } from './ESModulos/gmailModules.js'
sendEmail('dylan.jacome@gmail.com')