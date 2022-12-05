import { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';
import Button from '../copied/Button';
import styled from 'styled-components'


function MainContext(props) { 
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    const ThemeToggle = styled.div`
    width: 500px;
    height: 500px;
    padding: 1.5rem;
    backgroun-color: ${theme === "light" ? "white" : "black"}
    `;


    return (
        <ThemeToggle
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
        </ThemeToggle>
    )
}


export default MainContext;


MainContext.propTypes = {
    theme: PropTypes.string
}
MainContext.defaultProps = {
    theme: 'light'
}