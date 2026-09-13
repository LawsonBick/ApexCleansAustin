import urllib.request,urllib.parse,json,re,sys
from html.parser import HTMLParser
from concurrent.futures import ThreadPoolExecutor
base=sys.argv[1].rstrip('/')
class Page(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.title='';self.h1=[];self.tag='';self.robots='';self.canonical='';self.images=[]
 def handle_starttag(self,t,a):
  d=dict(a);self.tag=t
  if t=='a':self.links.append(d.get('href',''))
  if t=='meta' and d.get('name')=='robots':self.robots=d.get('content')
  if t=='link' and d.get('rel')=='canonical':self.canonical=d.get('href')
  if t=='img':self.images.append(d.get('src'))
 def handle_data(self,d):
  if self.tag=='title':self.title+=d
  if self.tag=='h1':self.h1.append(d)
 def handle_endtag(self,t):self.tag=''
def get(path):
 try:
  r=urllib.request.urlopen(base+path,timeout=25);s=r.read().decode();p=Page();p.feed(s);return {'path':path,'status':r.status,'title':p.title,'h1':p.h1,'robots':p.robots,'canonical':p.canonical,'links':p.links,'images':p.images,'bytes':len(s)}
 except Exception as e:return {'path':path,'error':str(e)}
seen=set();todo={'/'};rows=[]
while todo:
 batch=todo-seen;todo=set();seen.update(batch)
 for r in ThreadPoolExecutor(8).map(get,sorted(batch)):
  rows.append(r)
  for l in r.get('links',[]):
   if l.startswith('/') and not l.startswith('//') and not l.startswith('/images/'):
    path=l.split('#')[0].split('?')[0]
    if path and path not in seen:todo.add(path)
json.dump(rows,open(sys.argv[2],'w'),indent=2);print('Pages',len(rows),'errors',sum('error'in x for x in rows),'noindex',sum('noindex'in(x.get('robots')or'') for x in rows))
