import axios from 'axios';
import {GET_USER} from './types';

export const getUser = () => {
	return function(dispatch) {
		axios.get('/api/current_user').then(res => dispatch({type: GET_USER, payload: res}));
	};
};
