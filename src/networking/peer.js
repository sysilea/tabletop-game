import Peer from "peerjs";

let connections = [];

export function createHostPeer(roomId, onDataRecieved) {
    const peer = new Peer(roomId);

    peer.on("open", () => {
        console.log("Hosting room:", roomId);
    });

    peer.on("connection", (conn) => {
        console.log("Player Connected");
        
        connections.push(conn);
        
        conn.on("open", () => {
            console.log("Connection opened");
        });

        conn.on("data", (data) => {
            console.log("Host recieved:", data);

            onDataRecieved(data);
        });
        
        conn.on("close", () => {
            console.log("Player disconnected");

            connections = connections.filter(
                c => c !== conn
            );
        });
    });

    return peer;
}

export function joinHost(roomId, onDataRecievd) {
    const peer = new Peer();

    peer.on("open", () => {
        const conn = peer.connect(roomId);

        conn.on("open", () => {
            console.log("Connected to host");

            window.gameConnection = conn;
        });

        conn.on("data", (data) =>{
            console.log("client recieved:", data);
            
            onDataRecievd(data);
        });
    });

    return peer;
}

export function broadcastToPlayers(data) {
    connections.forEach(conn => {
        if(conn.open) {
            conn.send(data);
        }
    });
}