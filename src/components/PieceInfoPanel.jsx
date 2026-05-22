function PieceInfoPanel({ piece}) {
    const panelStyle = {
        width: 250,
        minHeight: 300,
        backgroundColor: "#222",
        color: "white",
        padding: 20,
        borderRadius: 8
    };
    
    if (!piece) {
        return (
            <div style={panelStyle}>
                <h2>No Piece Selected</h2>
            </div>
        );
    }

    return(
        <div style={panelStyle}>
            <h2>{piece.name}</h2>

            <p>HP: {piece.hp}</p>
            <p>Movement: {piece.movement}</p>
            <p>Attack: {piece.movement}</p>
            <p>Defense: {piece.defense}</p>

            <p>
                Position: ({piece.x}, {piece.y})
            </p>
        </div>
    );

}

export default PieceInfoPanel;