import { get } from '../../../apiUtil';
import { API_URL } from '../../../constants';

export const getItems = async () => get(`${API_URL}/items`);