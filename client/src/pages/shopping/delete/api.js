import { deleteItem } from '../../../apiUtil';
import { API_URL } from '../../../constants';

export const deleteItem = async (id) => deleteItem(`${API_URL}/item/${id}`);


