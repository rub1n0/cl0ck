// Component: StopwatchMode.tsx

import { useState } from 'react';
import { Button } from 'flowbite-react';

export default function StopwatchMode() {
    const [delay, setDelay] = useState(0);

    const startStopwatch = () => {
        const config = { mode: 'stopwatch', delay };
        console.log('Starting stopwatch with config:', config);
        // TODO: Send config to backend
    };

    return (
        <div>
            <label>
                Delay Start (sec):
                <input type="number" value={delay} onChange={(e) => setDelay(Number(e.target.value))} />
            </label>
            <Button onClick={startStopwatch}>Start Stopwatch</Button>
        </div>
    );
}