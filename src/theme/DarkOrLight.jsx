import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';
import MainContent from './MainContext';

function DarkOrLight(props) { 
    const [theme, setTheme] = useState('light');

    const toggleTheme = useCallback(() => {
        if (theme === 'light') {
            setTheme('dark');
        }
        else if (theme === 'dark') { 
            setTheme('light');
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MainContent></MainContent>
        </ThemeContext.Provider>
    );

}


export default DarkOrLight;

DarkOrLight.propTypes = {
    theme: PropTypes.string
}
DarkOrLight.defaultProps = {
    theme: 'light'
}