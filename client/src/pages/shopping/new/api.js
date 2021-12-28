import { post } from '../../../apiUtil';
import { API_URL } from '../../../constants';

export const addItems = (item) => post(`${API_URL}/item`, item);