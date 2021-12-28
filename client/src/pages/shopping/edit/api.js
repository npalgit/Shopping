import { put } from '../../../apiUtil';
import { API_URL } from '../../../constants';

export const editItems = async (item) => put(`${API_URL}/items`, item);