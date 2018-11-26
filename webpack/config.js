const path= require('path');
const rootPath= path.resolve(__dirname,'..');
console.log(rootPath)
const isPro= process.env.npm_lifecycle_event==="build";

let defaultSetting= {
   isPro: isPro,
   rootPath: rootPath,
   sassPath: '/src/assets/scss/',
   entryPath: rootPath+ '/src/',
   mainPage: './src/index.html',
   syncStaticPath: rootPath+'/static/**/*',
   entry: rootPath+ '/src/index.js',
   output: rootPath + '/dist/',
   fileName: isPro?'[name].[hash:8]':'[name]',
   extensions: [".js", ".json", ".jsx", ".vue",".ts"],
   alias: {
     '@': rootPath+ '/src/',
     '@scss': rootPath+ '/src/assets/scss',
   }
}

module.exports= defaultSetting;
