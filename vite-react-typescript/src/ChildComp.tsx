import { useState, ReactNode } from "react";

interface ChildCompProps {
    message: string,
    children: ReactNode,
}

function ChildComp({ message, children }: ChildCompProps) {
    const [count, setCount] = useState<number | string>(0);

    function updateCount(event: MouseEvent) {
        setCount(event.clientY);
    }

    return (
        <div>
            <h2>ChildComp</h2>
            <p>{message}</p>
            <div>{children}</div>
            <p>count: {count}</p>
            <button onClick={updateCount}>+1</button>
        </div>
    )
}

export default ChildComp;