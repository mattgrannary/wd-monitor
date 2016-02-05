import AppConstants from '../constants/app-constants';
import { dispatch } from '../dispatchers/app-dispatcher';
import DataService from '../services/data-service';

const dataService = new DataService('http://localhost:3000');

export default {
  streamData() {
    dataService.listen('monitor', (data)=> {
      dispatch({
        actionType: AppConstants.STREAM_DATA, data
      });
    });
  }
}
