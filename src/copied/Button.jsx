import React from 'react';
import PropTypes from 'prop-types';
import Styled, { css } from 'styled-components';
import { color } from './defaultStyled.js';

const buttonType = ['Primary', 'Secondary'];
const buttonStatus = ['normal', 'hover', 'pressed', 'disabled'];

const StyledButton = Styled.button`
    border: 0 none;
    background: 0 none;
    padding: 0;
    
    display: inline-flex;
    min-height: 40px;
    align-items: center;
    padding: 5px 20px;
    border-radius: 8px;
    color: white;
    background-color: blue;
    font-size: 20px;

    
    ${(props) => 
    props.status === 'normal' && css`
        background-color: ${color.primary};     
    `}
    ${(props) => 
    props.status === 'hover' && css`
        background-color: ${color.hover};     
    `}
    ${(props) => 
    props.status === 'pressed' && css`
        background-color: ${color.pressed};     
    `}
    ${(props) => 
    props.status === 'disabled' && css`
        background-color: ${color.disabled};     
    `}
    
    ${(props) => 
    props.type === 'Secondary' && css`
        padding: 5px 40px;
    `}

`;

export default function Button({status, type, ...props }) { 
    // primary button
    // Normal, Hover, Pressed, Disabled
    return (
        <StyledButton status={status} type={ type }>button</StyledButton>
    );
}

Button.propTypes = {
    status: PropTypes.oneOf(buttonStatus),
    type: PropTypes.oneOf(buttonType)

}
Button.defaultProps = {
    status: 'hover',
    type: buttonType[0]

}