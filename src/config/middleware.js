import morgan from 'morgan'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'


const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

export default app => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true }))

}