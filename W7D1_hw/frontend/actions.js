const SELECT_LOCATION = 'SELECT_LOCATION';

const selectLocation = (city, jobs) => ({type: SELECT_LOCATION, city, jobs});
window.selectLocation = selectLocation;

export default selectLocation;