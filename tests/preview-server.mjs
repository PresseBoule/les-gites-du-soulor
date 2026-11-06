// Local-only integration fixture. Never deploy this file or use real client credentials.
import http from 'node:http';
import { harness } from './cms-harness.mjs';
import {reservationHarness} from './reservation-harness.mjs';
const data=await reservationHarness();
await data.seed('gite','booking:soum:demo',{customerName:'Client démonstration',customerEmail:'client@example.test',startDate:'2027-02-06',endDate:'2027-02-10',status:'pending',price:600});
await data.seed('wellness','booking:demo',{clientName:'Client démonstration',clientEmail:'client@example.test',date:'2027-02-07',hour:16,status:'accepted'});
const {app}=harness({reservationClient:data.client,fetchBlocks:async()=>[]});
http.createServer(async(req,res)=>{
  const chunks=[];for await(const chunk of req)chunks.push(chunk);
  const body=Buffer.concat(chunks);
  const response=await app.fetch(new Request(`http://127.0.0.1:8790${req.url}`,{method:req.method,headers:req.headers,...(body.length?{body,duplex:'half'}:{})}));
  res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));
}).listen(8790,'127.0.0.1',()=>console.log('Local test CMS ready on port 8790. Fixture data only.'));
