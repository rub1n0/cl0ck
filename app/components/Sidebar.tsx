// Component: Sidebar.tsx
import { Button } from 'flowbite-react';

type Mode = {
    key: string;
    label: string;
};

interface SidebarProps {
    modes: Mode[];
    mode: string;
    setMode: (key: 'time' | 'workout' | 'timer' | 'stopwatch') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ modes, mode, setMode }) => {
    return (
        <aside className="hidden md:flex md:flex-col sidebar">
            <h2 className="text-heading">big digital cl0ck</h2>
            {modes.map((item) => (
                <Button
                    key={item.key}
                    className={`btn-primary mb-2 ${mode === item.key
                        ? 'btn-selected'
                        : 'btn-primary'}`}
                    onClick={() => setMode(item.key as 'time' | 'workout' | 'timer' | 'stopwatch')}
                >
                    {item.label}
                </Button>
            ))}
        </aside>
    );
};

export default Sidebar;