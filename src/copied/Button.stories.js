import React, { useState } from "react";
import Button from './Button';

export default {
    title: "copied/button",
    component: Button,
    argTypes: {
        type: {
            options: ['Primary', 'Secondary'],
            control: {type: 'radio'}
        }
    }
}


export const ButtonList = (args) => {
    return (<div>
    <Button {...args} status="normal"></Button>
    <Button {...args} status="hover"></Button>
    <Button {...args} status="pressed"></Button>
    <Button {...args} status="disabled"></Button>
    </div>
    );
};
ButtonList.args = {
    type: 'Secondary'
}
ButtonList.storyName = "all buttons";

const Template = (args) => (<Button {...args}></Button>);
export const normal = Template.bind({});
normal.args = {
    status: 'normal'
}

export const hover = Template.bind({});
hover.args = {
    status: 'hover'
}

export const pressed = Template.bind({});
pressed.args = {
    status: 'pressed'
}

export const disabled = Template.bind({});
disabled.args = {
    status: 'disabled'
}




