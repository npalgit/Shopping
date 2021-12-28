import { deleteItem } from '../../../apiUtil';
import { API_URL } from '../../../constants';

export const deleteItemApi = (id) => deleteItem(`${API_URL}/item/${id}`);


