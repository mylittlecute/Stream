/**
 * Created by Administrator on 2017/12/24 0024.
 */
var fs=require('fs');
var zlib=require('zlib');
fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));
console.log('文件压缩完成');
