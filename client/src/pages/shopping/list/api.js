import { get } from '../../../apiUtil';
import { API_URL } from '../../../constants';

export const getItems = () => get(`${API_URL}/items`);