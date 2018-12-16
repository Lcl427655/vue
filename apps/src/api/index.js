import axios from 'axios'
//增加一个默认的请求路径
axios.defaults.baseURL = 'http://localhost:8888';

//可以在这里统一拦截结果
axios.interceptors.response.use((res) => {
  return res.data;
});

//返回真的是一个Promise对象
export let getSliders = () => {
  return axios.get('/sliders');
}

export let getHotDowns = () => {
  return axios.get('/hotDown');
}

export let getHrefDowns = () => {
  return axios.get('/hrefDown');
}
