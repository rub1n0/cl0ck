// Component: TimerMode.tsx

import { useState } from 'react';
import { Button } from 'flowbite-react';
import TimeInputGroup from './TimeInputGroup';

export default function TimerMode() {
    const [delay, setDelay] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const startTimer = () => {
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        const config = { mode: 'timer', delay: Math.max(0, Math.min(99, delay)), totalSeconds };
        console.log('Starting timer with config:', config);
        // TODO: Send config to backend
    };

    const updateTime = (unit: 'H' | 'M' | 'S', value: number) => {
        if (unit === 'H') setHours(value);
        else if (unit === 'M') setMinutes(value);
        else if (unit === 'S') setSeconds(value);
    };

    return (
        <div>
            <label>
                Delay Start (sec):
                <input
                    type="number"
                    value={delay}
                    onChange={(e) => setDelay(Math.max(0, Math.min(99, Number(e.target.value))))}
                   
                    max={99}
                />
            </label>

            <TimeInputGroup
                label="Timer Duration"
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                onChange={updateTime}
            />

            <Button onClick={startTimer}>Start Timer</Button>
        </div>
    );
}