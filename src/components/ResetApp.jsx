import { useDispatch } from 'react-redux';
// import { resetCounter } from '../redux/slice/counterSlice';
import { resetReduxOPedia } from '../redux/action/actions';

function ResetApp() {
  const dispatch = useDispatch();

  const resetCounterAndDestination = () => {
    dispatch(resetReduxOPedia());
  };

  return (
    <div className="text-center pt-4">
      <button className="btn btn-warning" onClick={resetCounterAndDestination}>
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
