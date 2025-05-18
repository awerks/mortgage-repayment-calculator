import { useState } from "react";

import "./index.css";

function App() {
    return (
        <main className="h-full">
            <Card />
        </main>
    );
}
function Card() {
    return <div className="card text-center">Some text here</div>;
}

export default App;
