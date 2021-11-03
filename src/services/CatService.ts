import { ICat } from '../interfaces';
import { Api } from '../providers';


const getAll = () => Api.get<ICat[]>(`/v1/images/search?limit=5&page=100&order=DESC`, {headers:{"x-api-key":`${process.env.REACT_APP_API_KEY}`}})

export const CatService = {
  getAll,
}


