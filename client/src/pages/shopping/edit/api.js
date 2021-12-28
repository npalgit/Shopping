import { put } from '../../../apiUtil';
import { API_URL } from '../../../constants';

export const editItems = (item) => put(`${API_URL}/item`, item);