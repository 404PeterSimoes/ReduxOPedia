import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slice/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();

  return (
    <div className="m-4 rounded border text-center">
      <h1 className="text-warning pt-3">Counter App</h1>
      <hr />
      <div className="pb-2">
        <span className="badge bg-secondary fs-1 p-3 mb-3">{count}</span>
      </div>
      <div>
        <button
          className="btn btn-danger mx-2"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
