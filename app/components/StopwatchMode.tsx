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
        <div className="flex flex-col gap-4 w-full max-w-md card">
            <label className="flex flex-row">
                Delay Start (sec):
                <input type="number" value={delay} onChange={(e) => setDelay(Number(e.target.value))} className="input input-bordered w-1/4 digit-input" />
            </label>
            <Button className='btn-primary btn-hover btn-focus card' onClick={startStopwatch}>Start Stopwatch</Button>
        </div>
    );
}