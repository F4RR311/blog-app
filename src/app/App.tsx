import React, { Suspense, useState } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/SideBar';
import { Modal } from 'shared/ui/Modal/Modal';

const App = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <button onClick={() => setIsOpen(true)}>toggle</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>

                    sdfsfsdfsjkfsjkdhfsjdfsjgsg
                    asgasgsgs
                    dgsdgsdg
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    );
};

export default App;
