import CONFIG from  '../../src/config';
import {getConfigName} from '../services/environment';

export const BASE = CONFIG[getConfigName()].databaseURL;
export const CATEGORIES = `${BASE}/categories.json`;

export default {
    BASE,
    CATEGORIES,
};
