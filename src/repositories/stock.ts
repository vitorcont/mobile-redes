import getInstance from '@mobile/api/axios';

const StockAPI = {
  listStock: async () => {
    const instance = await getInstance();
    const { data } = await instance.get('/stock');

    console.log(data);

    return data;
  },
  updateStock: async (id: string, amount: number) => {
    const instance = await getInstance();
    const { data } = await instance.put(`/stock/${id}?entry`, {amount: amount});

    console.log(data);

    return data;
  },
};

export default StockAPI;
