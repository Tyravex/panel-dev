export const fetcher=async(url:string,options?:RequestInit)=>{
  const res=await fetch(url,{
    headers:{'Content-Type':'application/json'},
    ...options
  });

  if(!res.ok) throw new Error('API error');
  return res.json();
}
