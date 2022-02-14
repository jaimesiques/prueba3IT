import {useState} from 'react';

//Packages
import axios from 'axios';

const useAxios = (setLoader) => {
  const [data, setData] = useState(null);

  const getData = () => {
    let filteredData = [];
    axios
      .get(`https://mindicador.cl/api`)
      .then((res) => {
        Object.values(res.data).forEach((val) => {
          if (val.codigo !== undefined) {
            filteredData.push(val);
          }
        });
        filteredData.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
        setData(filteredData);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDataDetail = (code) => {
    axios
      .get(`https://mindicador.cl/api/${code}`)
      .then((res) => {
        setData(res.data);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    data,
    getData,
    getDataDetail,
  };
};

export default useAxios;
