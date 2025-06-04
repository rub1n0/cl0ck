// Component: Drawer.tsx
import { Button } from 'flowbite-react';
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
        <div className="md:hidden flex flex-col drawer">
            <div className='flex justify-between items-center'>
                <button onClick={() => setDrawerOpen(!drawerOpen)}>
                    <Menu className="btn-drawer"/>
                </button>
                <div className="text-heading">big digital cl0ck</div>
            </div>
            {drawerOpen && (
                modes.map((item) => (
                    <Button
                        key={item.key}
                        className={`btn-hover btn-focus mb-2 ${mode === item.key
                                ? "btn-selected" : "btn-primary"
                            }`}
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