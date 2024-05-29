import express from 'express'
import { posts } from './data/posts.js'
const app = express()
const PORT = 3001

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get("/posts", (req, res) => {
    res.status(200).json({
        message: "Posts fetched successfully!",
        data: {item: posts, count: posts.length}
    })
})

app.get("/post/:id", (req, res) => {
    const {id} = req.params
    const post = posts.find((element) => `${element.id}` === id)
    
    if (post) {
        res.status(200).json({
            message: "Post fetched successfully!",
            data: post
        })
        res.status(401).json({
            message: "Post not found!",
            data: []
        })
    }
})

app.get("/detail", (req, res) => {
    const detail = req.query

    const post = detail  .find((element) => `${element.id}` === id)
    
    if (post) {
        res.status(200).json({
            message: "Post fetched successfully!",
            data: post
        })
        res.status(401).json({
            message: "Post not found!",
            data: []
        })
    }
})

// console.log('Hello World')

app.listen(PORT, (err) => {
    if(err) {
        throw new Error(err)
    }
    console.log(`Server running on http://localhost:${PORT}`)
})