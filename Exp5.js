const http= require('http');
url= require('url');
http.createServer((req,res)=>{
    
    console.log(req.url);
    var q= url.parse(req.url,true).query;
    console.log(q);
    console.log(q.t1);
    var a = Number(q.t1);
    var carea = (3.14)*a*a;
    var l=Number(q.l);
    var b=Number(q.b);
    res.write("Area of the circle is "+carea+"\nArea of rectangle is "+l*b);
    res.end();   
}).listen(8000);