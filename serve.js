const http=require('http'),fs=require('fs'),path=require('path');
const root=__dirname;
const types={'.html':'text/html','.jpg':'image/jpeg','.png':'image/png','.css':'text/css','.js':'text/javascript'};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]); if(p==='/')p='/bb_gallery.html';
  const fp=path.join(root,p);
  if(!fp.startsWith(root)||!fs.existsSync(fp)){res.writeHead(404);return res.end('nf');}
  res.writeHead(200,{'Content-Type':types[path.extname(fp)]||'application/octet-stream'});
  fs.createReadStream(fp).pipe(res);
}).listen(8793,()=>console.log('serving on 8791'));
