// Component: Drawer.tsx
import { Button, DarkThemeToggle } from 'flowbite-react';
import { Menu } from 'lucide-react';

type Mode = {
    key: string;
    label: string;
};

type DrawerProps = {
    modes: Mode[];
    mode: string;
    setMode: (key: 'time' | 'workout' | 'timer' | 'stopwatch') => void;
    drawerOpen: boolean;
    setDrawerOpen: (open: boolean) => void;
};

const Drawer: React.FC<DrawerProps> = ({ modes, mode, setMode, drawerOpen, setDrawerOpen }) => {
    return (
        <div>
            <div>
                <button onClick={() => setDrawerOpen(!drawerOpen)}>
                    <Menu/>
                </button>
                <div>
                    <div>big digital cl0ck</div>
                    <DarkThemeToggle />
                </div>
            </div>
            {drawerOpen && (
                modes.map((item) => (
                    <Button
                        key={item.key}
                        onClick={() => setMode(item.key as 'time' | 'workout' | 'timer' | 'stopwatch')}
                    >
                        {item.label}
                    </Button>
                ))
            )}
        </div>
    );
};

export default Drawer;