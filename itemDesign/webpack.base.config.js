// 导入path模块

const path=require('path')
const webpack=require('webpack')
module.exports = {
	// 打包入口
	entry:'./src/main.js',
	// 打包出口
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'dist')
	},
  module: {
    rules: [
		{
		    test: /\.scss$/,
		    use: [
				{loader: "style-loader"}, 
				{loader: "css-loader"},
				{loader: "sass-loader"},
				]
		},		
			
		{
			test: /\.css$/,
			use: [ 'style-loader', 'css-loader' ]
		},
		{
		        test: /\.(png|jpg|gif)$/,
		        use: [
		          {
		            loader: 'file-loader',
		            options: {
		              name:'[name].[ext]',
					  limit:8192
		            }
		          }
		        ]
		}
		
	]
  },
  plugins:[
	  new webpack.ProvidePlugin({
		  $:'jquery',
		  jQuery:'jquery',
		  "windows.jQuery":"jquery"
	  })
  ]
};