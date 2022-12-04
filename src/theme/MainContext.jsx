import {useContext} from 'react';
import ThemeContext from './ThemeContext';
import Button from '../copied/Button';

function MainContext(props) { 
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <div
            style={{
                width: "100vw",
                height: "50vh",
                padding: "1.5rem",
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white",
            }}
        >
            <p>테마 변경해 보세요</p>
            <Button onClick={ toggleTheme }>테마 변경</Button>
        </div>
    )
}


export default MainContext;