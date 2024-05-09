import express from 'express'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(indexRoutes)

app.listen(3000, () => {
    console.log(`Server started on port ${3000}`);
})