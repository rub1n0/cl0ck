// Component: Sidebar.tsx
import { Button, DarkThemeToggle } from 'flowbite-react';

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
        <aside>
            <div>
                <h2>big digital cl0ck</h2>
                <DarkThemeToggle />
            </div>
            {modes.map((item) => (
                <Button
                    key={item.key}
                    onClick={() => setMode(item.key as 'time' | 'workout' | 'timer' | 'stopwatch')}
                >
                    {item.label}
                </Button>
            ))}
        </aside>
    );
};

export default Sidebar;