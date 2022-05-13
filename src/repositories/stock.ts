import getInstance from '@mobile/api/axios';

const StockAPI = {
  listStock: async () => {
    const instance = await getInstance();
    console.log("ba")
    const { data } = await instance.get('/stock');
    console.log("cc");
    console.log(data)

    return data;
  },
};

export default StockAPI;
