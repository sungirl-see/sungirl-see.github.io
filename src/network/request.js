// import axios from "axios"

// export function requestdemo(config){
// 	const instance = axios.create({
// 		baseURL:'http://localhost:8020/demo0706',
// 		// timeout:5000
// 	})
// 	return instance(config)
// }

// export function requestapi(config){
// 	const instance = axios.create({
// 		baseURL:'https://api.jisuapi.com/news/get',
// 		// timeout:5000
// 	})
// 	return instance(config)
// }
// devServer:{
// 		proxy:{
// 			'/api':{
// 				target:'https://api.jisuapi.com/news/get',
// 				changeOrigin:true,	
// 				ws:true,
// 				pathRewrite:{
// 					'^/api':''
// 				}
// 			},
// 			'/req':{
// 				target:'https://api.jisuapi.com/astro/fortune',
// 				changeOrigin:true,	
// 				ws:true,
// 				pathRewrite:{
// 					'^/req':''
// 				}
// 			},
// 			'/demo':{
// 				target:'http://localhost:8020/demo0706/regist',
// 				changeOrigin:true,
// 				ws:true,
// 				pathRewrite:{
// 					'^/demo':''
// 				}
// 			}
// 		}
// 	}