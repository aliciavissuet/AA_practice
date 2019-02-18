import selectLocation from './actions';
const initialState = {
  city: "Please Select", 
  jobs: []
};

const reducer = (action, state=initialState ) => {
  switch(action) {
    case 'SELECT_LOCATION':
      return ({
        location: action.city,
        jobs: action.jobs
      });

    default: 
      return state;
      
  } // remove this and fill out the body of the reducer function
};
window.reducer = reducer;
export default reducer;
