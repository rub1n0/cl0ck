// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Drawer from './components/Drawer';
import Sidebar from './components/Sidebar';
import TimeMode from './components/TimeMode';
import WorkoutMode from './components/WorkoutMode';
import TimerMode from './components/TimerMode';
import StopwatchMode from './components/StopwatchMode';

export default function Home() {
    const [mode, setMode] = useState<'time' | 'workout' | 'timer' | 'stopwatch'>('time');
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Load mode from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem('selectedMode');
        if (stored === 'time' || stored === 'workout' || stored === 'timer' || stored === 'stopwatch') {
            setMode(stored);
        }
    }, []);

    const modes = [
        { key: 'time', label: 'cl0ck' },
        { key: 'workout', label: 'w0rk0ut' },
        { key: 'timer', label: 'timer' },
        { key: 'stopwatch', label: 'st0pwatch' }
    ];

    const changeMode = (newMode: typeof mode) => {
        setMode(newMode);
        localStorage.setItem('selectedMode', newMode);
        setDrawerOpen(false);
    };

    return (
        <div>
            <Sidebar modes={modes} mode={mode} setMode={changeMode} />

            <div>
                <Drawer
                    modes={modes}
                    mode={mode}
                    setMode={changeMode}
                    drawerOpen={drawerOpen}
                    setDrawerOpen={setDrawerOpen}
                />

                <main>
                    {mode === 'time' && <TimeMode />}
                    {mode === 'workout' && <WorkoutMode />}
                    {mode === 'timer' && <TimerMode />}
                    {mode === 'stopwatch' && <StopwatchMode />}
                </main>
            </div>
        </div>
    );
}
