import React, { useState } from 'react';

const buttonStyle = {
    height: '40px',
    margin: '20px',
}

export default function Books() {
    const [data, setData] = useState();

    const getFakeData = async () => {
        const apiUrl = "/api/faker";
        const res = await fetch(apiUrl);
        const json = await res.json();
        setData(json);
    }

    const clearFakeData = () => setData("");

    return (
        <div>
            <h1>I am the Books page</h1>
            <h4>(even though I have nothing to do with books)</h4>
            <p>I get data from <code>/api/faker</code></p>
            <button onClick={getFakeData} style={buttonStyle}>
                Click me to simulate getting data from our API
            </button>
            <button onClick={clearFakeData} disabled={!Boolean(data)} style={buttonStyle}>
                Clear Data
            </button>
            {data ? (
                <div>
                    <br />
                    <hr />
                    <h3>Data From API:</h3>
                    <pre>
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </div>
            ) : ""}
        </div>
    );
}