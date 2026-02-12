export async function onRequest(context) {
    const upgradeHeader = context.request.headers.get('Upgrade');
    if (upgradeHeader === 'websocket') {
        const webSocketPair = new WebSocketPair();
        const [client, server] = Object.values(webSocketPair);
        server.accept();
        return new Response(null, { status: 101, webSocket: client });
    }
    return new Response("Airtel Research: Active", { 
        status: 200, 
        headers: { "Content-Type": "text/plain" } 
    });
}
