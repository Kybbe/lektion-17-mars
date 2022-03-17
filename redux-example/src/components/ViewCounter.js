import { useSelector } from 'react-redux';

function ViewCounter() {
    const counter = useSelector((state) => { return state.counter });

    return (
        <p>Counter: { counter }</p>
    )
}

export default ViewCounter;