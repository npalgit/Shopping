import { post } from '../../../apiUtil';
import { API_URL } from '../../../constants';

export const editItems = async (item) => post(`${API_URL}/items`, item);