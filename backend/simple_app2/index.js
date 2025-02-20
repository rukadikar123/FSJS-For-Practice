import http from 'http'

const server=http.createServer(function(req, res){
    res.end('hello world')
})

server.listen(3000)