// Local-only integration fixture. Never deploy this file or use real client credentials.
import http from 'node:http';
import { harness } from './cms-harness.mjs';
const {app}=harness();
http.createServer(async(req,res)=>{
  const chunks=[];for await(const chunk of req)chunks.push(chunk);
  const body=Buffer.concat(chunks);
  const response=await app.fetch(new Request(`http://127.0.0.1:8788${req.url}`,{method:req.method,headers:req.headers,...(body.length?{body,duplex:'half'}:{})}));
  res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));
}).listen(8788,'127.0.0.1',()=>console.log('Local test CMS ready on port 8788. Fixture data only.'));
