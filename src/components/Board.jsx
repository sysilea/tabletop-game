function Board ({ pieces, selectedPiece, onTileClick }) {
    const size = 8;

    function getPieceAt(x, y) {
        return pieces.find(
            p=> p.x === x && p.y === y
        );
    }



    return (
        <div
        style={{
            display: "grid",
            gridTemplateColumns: `repeat(${size}, 72px)`,
            gridTemplateRows: `repeat(${size}, 72px)`,
            border: "4px solid #333",
            width: "fit content"
        }}
        >
        {[...Array(size*size)].map((_, index) => {
            const x = index % size;
            const y = Math.floor(index /size);

            const piece = getPieceAt(x, y);

            const isDark = 
                (x + y) % 2 === 0;

            return (
                <div
                key={index}
                onClick={() => onTileClick(x, y)}
                style={{
                    width: 72,
                    height: 72,
                    backgroundColor: isDark
                        ? "#769656"
                        : "#eeeed2",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    cursor: "pointer"
                }}
            >
                {piece && (
                    <div
                        style={{
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            backgroundColor:
                                selectedPiece === piece.display
                                    ? "#ff4444"
                                    : "#222",
                            border: "3px solid white",
                            transition:
                                "all 0.15 ease"
                        }}
                    />
                )}
            </div>
            );
        })}
        </div>
    );
}

export default Board;