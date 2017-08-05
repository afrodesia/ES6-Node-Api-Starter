const devConfig = {
    MONGO_URL : 'mongodb://localhost/api-node',
}

const testConfig = {
    MONGO_URL : 'mongodb://localhost/api-node',
}

const prodConfig = {
    MONGO_URL : 'mongodb://localhost/api-node',
}

const defaultConfig = {
    PORT: process.env.PORT || 3333,
}

function envConfig(env){
    switch(env){
        case 'development':
            return devConfig
        case 'test':
            return testConfig
        default:
            return prodConfig    
    }
}
export default {
    ...defaultConfig,
    ...envConfig(process.env.NODE_ENV),
}