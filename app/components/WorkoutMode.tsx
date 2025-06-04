// Component: WorkoutMode.tsx

import { useState } from 'react';
import { Button, Select } from 'flowbite-react';
import { ArrowUp, ArrowDown, Copy, Trash2, PlusIcon } from 'lucide-react';
import TimeInputGroup from './TimeInputGroup';

export default function WorkoutMode() {
    type Round = {
        label: string;
        work: number;
        rest: number;
        workH: number;
        workM: number;
        workS: number;
        restH: number;
        restM: number;
        restS: number;
    };

    const [delay, setDelay] = useState(5);
    const [roundsData, setRoundsData] = useState<Round[]>([
        { label: 'Round 1', work: 30, rest: 10, workH: 0, workM: 0, workS: 30, restH: 0, restM: 0, restS: 10 },
        { label: 'Round 2', work: 30, rest: 10, workH: 0, workM: 0, workS: 30, restH: 0, restM: 0, restS: 10 },
    ]);

    const updateRound = (index: number, key: keyof Round, value: string | number) => {
        const updated = [...roundsData];
        if (typeof value === 'string') {
            if (key === 'label') {
                updated[index][key] = value as string;
            }
        } else {
            if (key !== 'label') {
                updated[index][key] = Math.max(0, value) as number;
            }
        }

        if (["workH", "workM", "workS"].includes(key)) {
            const { workH, workM, workS } = updated[index];
            updated[index].work = durationToSeconds(workH, workM, workS);
        }
        if (["restH", "restM", "restS"].includes(key)) {
            const { restH, restM, restS } = updated[index];
            updated[index].rest = durationToSeconds(restH, restM, restS);
        }

        setRoundsData(updated);
    };

    const moveRound = (from: number, to: number) => {
        const updated = [...roundsData];
        const [moved] = updated.splice(from, 1);
        updated.splice(to, 0, moved);
        setRoundsData(updated);
    };

    const deleteRound = (index: number) => {
        const updated = [...roundsData];
        updated.splice(index, 1);
        setRoundsData(updated);
    };

    const duplicateRound = (index: number) => {
        const updated = [...roundsData];
        const duplicate = { ...updated[index] };
        updated.splice(index + 1, 0, duplicate);
        setRoundsData(updated);
    };

    const addRound = () => {
        setRoundsData([
            ...roundsData,
            { label: `Round ${roundsData.length + 1}`, work: 30, rest: 10, workH: 0, workM: 0, workS: 30, restH: 0, restM: 0, restS: 10 },
        ]);
    };

    const startWorkout = () => {
        const workoutConfig = {
            mode: 'workout',
            delay: delay,
            blocks: [{ roundsData }],
        };
        console.log('Sending workout config:', workoutConfig);
    };

    const durationToSeconds = (h: number, m: number, s: number) => h * 3600 + m * 60 + s;

    return (
        <div className="flex flex-col gap-4 w-full max-w-md sm:max-w-lg md:max-w-2xl">
            <div className='card'>
                <input
                    defaultValue="Pre-Workout"
                    type="text"
                    className="card-header input input-bordered"
                    readOnly
                />
                <TimeInputGroup
                    label="Delay"
                    hours={Math.floor(delay / 3600)}
                    minutes={Math.floor((delay % 3600) / 60)}
                    seconds={delay % 60}
                    onChange={(unit, value) => {
                        const h = unit === 'H' ? value : Math.floor(delay / 3600);
                        const m = unit === 'M' ? value : Math.floor((delay % 3600) / 60);
                        const s = unit === 'S' ? value : delay % 60;
                        setDelay(h * 3600 + m * 60 + s);
                    }}
                />
            </div>


            {roundsData.map((round, idx) => {
                const total = round.work + round.rest;
                return (
                    <div key={idx} className="card">
                        <div className="flex justify-between">
                            <input
                                type="text"
                                value={round.label}
                                onChange={(e) => updateRound(idx, 'label', e.target.value)}
                                className="card-header input input-bordered"
                            />
                            <div className="flex gap-2">
                                {idx > 0 && <Button size="xs" className='btn-primary btn-hover btn-focus' onClick={() => moveRound(idx, idx - 1)}><ArrowUp className="btn-icon" /></Button>}
                                {idx < roundsData.length - 1 && <Button size="xs" className='btn-primary btn-hover btn-focus' onClick={() => moveRound(idx, idx + 1)}><ArrowDown className="btn-icon" /></Button>}
                                <Button size="xs" className='btn-primary btn-hover btn-focus' onClick={() => duplicateRound(idx)}><Copy className="btn-icon" /></Button>
                                <Button size="xs" className='btn-primary btn-hover btn-focus' onClick={() => deleteRound(idx)}><Trash2 className="btn-icon" /></Button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <TimeInputGroup
                                label="Work"
                                hours={round.workH}
                                minutes={round.workM}
                                seconds={round.workS}
                                onChange={(unit, value) => updateRound(idx, `work${unit}` as keyof Round, value)}
                            />
                            <TimeInputGroup
                                label="Rest"
                                hours={round.restH}
                                minutes={round.restM}
                                seconds={round.restS}
                                onChange={(unit, value) => updateRound(idx, `rest${unit}` as keyof Round, value)}
                            />
                        </div>
                        <div className="flex items-center mt-1">
                            {round.work > 0 && (
                                <div
                                    className={`segment-work flex items-center justify-center`}
                                    style={{ width: round.rest === 0 ? '100%' : `${(round.work / total) * 100}%` }}
                                >
                                    <div className='segment-label'>Work</div>
                                    {[round.workH && `${round.workH}h`, round.workM && `${round.workM}m`, round.workS && `${round.workS}s`].filter(Boolean).join(' ')}
                                </div>
                            )}
                            {round.rest > 0 && (
                                <div
                                    className={`segment-rest flex items-center justify-center`}
                                    style={{ width: round.work === 0 ? '100%' : `${(round.rest / total) * 100}%` }}
                                >
                                    <div className='segment-label'>Rest</div>
                                    {[round.restH && `${round.restH}h`, round.restM && `${round.restM}m`, round.restS && `${round.restS}s`].filter(Boolean).join(' ')}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
            <div className='flex gap-2 flex-flow-row justify-between'>
                <Select className="w-1/3 mb-2" onChange={(e) => {
                    const val = e.target.value;
                    if (val === 'Tabata') {
                        setRoundsData(Array(8).fill({ label: 'Tabata', work: 20, rest: 10, workH: 0, workM: 0, workS: 20, restH: 0, restM: 0, restS: 10 }));
                    } else if (val === 'EMOM') {
                        setRoundsData(Array(5).fill({ label: 'EMOM', work: 60, rest: 0, workH: 0, workM: 1, workS: 0, restH: 0, restM: 0, restS: 0 }));
                    }
                }}>
                    <option value="Custom">Preset</option>
                    <option value="Tabata">Tabata</option>
                    <option value="EMOM">EMOM</option>
                </Select>

                <Button className='w-1/3 btn-primary btn-hover btn-focus card' onClick={addRound}><PlusIcon className="btn-icon" />Round</Button>
            </div>
            <Button className='btn-primary btn-hover btn-focus card' onClick={startWorkout}>Start Workout</Button>
        </div>
    );
};