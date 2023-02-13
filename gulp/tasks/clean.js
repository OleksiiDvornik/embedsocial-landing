import { deleteAsync } from 'del';

const clean = async () => {
  return await deleteAsync(['dist']);
}

export default clean;
