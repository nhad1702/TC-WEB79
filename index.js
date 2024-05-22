import http from 'http'

const app = http.createServer((req, res) => {
    res.end("Hello World");
})
const PORT = 3001

app.listen(PORT, (err) => {
    if(err) {
        throw new Error(err)
    }

    console.log(`Server running on http://localhost:${PORT}`)
})