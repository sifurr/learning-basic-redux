import { useDispatch, useSelector } from "react-redux";
import {increment, decrement, incrementByValue} from "../redux/features/counter/counterSlice";

const Counter = () => {
    // consume the state that we have created earlier
    const {count} = useSelector((state) => state.counter);
    // console.log(count);

    // perform the actions with dispatch
    const dispatch = useDispatch();

    return (
        <div>

            {/* use payload to change the value */}
            <button onClick={()=> dispatch(incrementByValue(5))}>Increment by 5</button>
            
            {/* without value */}
            <br />
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;