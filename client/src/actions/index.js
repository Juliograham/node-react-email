import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    
    dispatch({ type: FETCH_USER, payload: res.data });
};

console.log('STRIPE KEY IS ', process.env.REACT_APP_STRIPE_KEY);