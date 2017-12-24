/**
 * Created by Administrator on 2017/12/24 0024.
 */
var fs=require('fs');
var zlib=require('zlib');
fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('inputunzip.txt'));
console.log('文件解压完成');
