import express from 'express'
import router from './router.js'
import fileUpload from 'express-fileupload'

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
  try {
    app.listen(PORT, () => {
      console.log('Ready on port: ' + PORT);
    })
  } catch (error) {
    console.log(error);
  }
}


startApp()