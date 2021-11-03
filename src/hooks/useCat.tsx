import { useCallback, useState } from "react"
import { ICat } from "../interfaces";
import { CatService } from "../services";


export const useCat = () => {
  const [tasks, setTasks] = useState<ICat[]>([]);

  const getAll = useCallback(async () => {
    const { status, data } = await CatService.getAll();
    if (status !== 200) throw new Error();

    setTasks(data);
    return data;
  }, []);

  return {
    tasks,
    getAll
  }

}