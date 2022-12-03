import React from 'react';
import Button from './Button'

export function CopiedApp() { 
    return (
        <>
        <Button status="normal"></Button>
        <Button status="hover"></Button>
        <Button status="pressed"></Button>
        <Button status="disabled"></Button>
        </>
    );
}