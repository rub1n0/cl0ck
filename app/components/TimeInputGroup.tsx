// Component: TimeInputGroup.tsx

type TimeInputGroupProps = {
    label: string;
    hours: number;
    minutes: number;
    seconds: number;
    onChange: (unit: 'H' | 'M' | 'S', value: number) => void;
};

export default function TimeInputGroup({ label, hours, minutes, seconds, onChange }: TimeInputGroupProps) {
    return (
        <label>
            <div>{label}</div>
            <div>
                <div>Hr</div>
                <input
                    type="number"
                    min={0}
                    max={99}
                    value={hours}
                    onChange={(e) => onChange('H', Math.max(0, Math.min(99, Number(e.target.value))))}
                   
                />
                <div>Min</div>
                <input
                    type="number"
                    min={0}
                    max={59}
                    value={minutes}
                    onChange={(e) => onChange('M', Math.max(0, Math.min(59, Number(e.target.value))))}
                   
                />
                <div>Sec</div>
                <input
                    type="number"
                    min={0}
                    max={59}
                    value={seconds}
                    onChange={(e) => onChange('S', Math.max(0, Math.min(59, Number(e.target.value))))}
                   
                />
            </div>
        </label>
    );
}