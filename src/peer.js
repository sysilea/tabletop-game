import Peer from "peerjs";
export function createHostPeer(roomId, onDataRecieved) {
    const peer = new Peer(roomId);

    peer.on("open", () => {
        console.log("Hosting room:", roomId);
    });

    peer.on("connection", (conn) => {
        console.log("Player Connected");
        conn.on("Data", (data) => {
            onDataRecieved(data);
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

            conn.on("data", (data) => {
                onDataRecieved(data);
            });
            
            window.gameConnection = conn;
        });
    });
    return peer;
}