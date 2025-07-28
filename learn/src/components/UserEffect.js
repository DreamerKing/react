import { useEffect, useState } from 'react';
import userApi from '../mock/userApi';


export default function UserEffect() {
    const [user, setUser] = useState({ name: 'test', age: 0 });

    useEffect(() => {
        userApi().then(u => {
            setUser(() => u);
        });
    }, []);

    return (
        <div>
            {user.name} {' -> '} {user.age}
        </div>
    )
}