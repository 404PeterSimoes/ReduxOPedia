import { useSelector, useDispatch } from 'react-redux';
import { destinationClicked } from '../redux/slice/destinationSlice';

function DestinationList() {
  const dispatch = useDispatch();

  const destinationList = useSelector(
    (state) => state.destinationStore.destinations,
  );

  return destinationList.map((destination, index) => {
    return (
      <div className="text-center row border-bottom" key={index}>
        <div className="col-8 pt-2">{destination.name}</div>
        <div className="col-4">
          <button
            onClick={() => dispatch(destinationClicked(destination))}
            className="btn btn-success form-control m-1"
          >
            Details
          </button>
        </div>
      </div>
    );
  });
}

export default DestinationList;
