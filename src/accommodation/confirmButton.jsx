import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../copied/Button';

export default function ConfirmButton() { 
    const [isConfirmed, setIsConfirmed] = useState(false);
    const handleConfirm = () => { 
        setIsConfirmed((PrevIsConfirmed) => { 
            return !PrevIsConfirmed;
        });
    }

    return (
        <div>
            <Button onClick={handleConfirm} disabled={ isConfirmed }>{ isConfirmed ? '확인됨': '확인하기'}</Button>
        </div>
    );
}

ConfirmButton.propTypes = {
    isConfirmed: PropTypes.bool,
}
ConfirmButton.defaultProps = {
    isConfirmed: false,
}