export const BASE_URL='http://192.168.0.104:8080/api';


export const {
    BUS_WS_ENDPOINT,
    STORE_URL,
    FF_API,
    ZNET_CONTENT_URL,
    SHOP_REFERRAL_URL,
    ZNET_HOW_IT_WORKS_PATH,
    APM_URL,
    ENV,
  } = window.env || {
    BUS_WS_ENDPOINT: process.env.REACT_APP_BUS_WS_ENDPOINT,
    STORE_URL: process.env.REACT_APP_STORE_URL,
    FF_API: process.env.REACT_APP_FF_API,
    ZNET_CONTENT_URL: process.env.REACT_APP_ZNET_CONTENT_URL,
    SHOP_REFERRAL_URL: process.env.REACT_APP_SHOP_REFERRAL_URL,
    ZNET_HOW_IT_WORKS_PATH: process.env.REACT_APP_ZNET_HOW_IT_WORKS_PATH,
    APM_URL: process.env.REACT_APP_APM_URL,
    ENV: process.env.REACT_APP_ENV,
  };