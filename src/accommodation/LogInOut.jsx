import React, { useState } from 'react';
import Button from '../copied/Button';

export default function LogInOut() { 
    const [isLogin, setIsLogin] = useState(false);

    const onToggleLogInOut = () => { 
        setIsLogin(!isLogin);
    }

    return (
        <div>
            <Button onClick={onToggleLogInOut}>{ isLogin ? '로그인' : '로그아웃'}</Button>
            {
                isLogin ? <p>로그인 되었습니다.</p> : <p>로그아웃 되었습니다.</p>
            }
        </div>
    )
}
