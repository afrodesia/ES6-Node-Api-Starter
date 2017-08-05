import express from 'express'

import constants from './config/constants'
import './config/database'
import middlewareConfig from './config/middleware' 

const app = express()

middlewareConfig(app)


// const PORT = process.env.PORT || 3333

app.listen(constants.PORT, err => {
    if (err){
        throw err
    } else {
        console.log(`
            -------------------------------
            Server Running on port: ${constants.PORT}
            -------------------------------  
            Running on ${process.env.NODE_ENV}
            ===============================
            Go ahead and create something different!!
        `)
    }
})