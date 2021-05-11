import WebSocket from 'ws';

export function startWs() {

    const wss = new WebSocket.Server({ port: 8080 });

    wss.on('connection', function connection(ws) {
        ws.on('message', function incoming(message) {
            console.log('received: %s', message);
            ws.send(`${Date.now()} -- Hey, I received your message: ${message}`)
        });

        ws.send('something');
    });
}