import urllib.request,urllib.error,concurrent.futures,json,re
from html.parser import HTMLParser
from pathlib import Path
base='http://127.0.0.1:4173'
class Parser(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.images=[];self.h1=0;self.canonical=[];self.meta={};self.title=False;self.titletext=''
 def handle_starttag(self,t,a):
  d=dict(a)
  if t=='h1':self.h1+=1
  if t=='title':self.title=True
  if t=='a':self.links.append(d.get('href',''))
  if t=='img':self.images.append(d.get('src',''))
  if t=='link' and d.get('rel')=='canonical':self.canonical.append(d.get('href'))
  if t=='meta':self.meta[d.get('name',d.get('property',''))]=d.get('content','')
 def handle_endtag(self,t):
  if t=='title':self.title=False
 def handle_data(self,d):
  if self.title:self.titletext+=d
xml=urllib.request.urlopen(base+'/sitemap.xml').read().decode();paths=[s.replace('https://apexcleansaustin.com','') for s in re.findall(r'<loc>(.*?)</loc>',xml)]
def check(path):
 try:
  r=urllib.request.urlopen(base+path);h=r.read().decode();p=Parser();p.feed(h);return {'path':path,'status':r.status,'h1':p.h1,'canonical':p.canonical,'title':p.titletext,'description':p.meta.get('description'),'robots':p.meta.get('robots'),'links':p.links,'images':p.images}
 except urllib.error.HTTPError as e:return {'path':path,'status':e.code}
results=list(concurrent.futures.ThreadPoolExecutor(4).map(check,paths));assets=set(i for r in results for i in r.get('images',[]));links=set(l.split('#')[0] for r in results for l in r.get('links',[]) if l.startswith('/'));extra=list(concurrent.futures.ThreadPoolExecutor(4).map(check,[l for l in links if l not in paths and l]));missing=check('/definitely-not-a-page');assert missing['status']==404,missing
for r in results:assert r['status']==200 and r['h1']==1 and r['description'] and len(r['canonical'])==1,r
assert len(set(r['title'] for r in results))==len(results),'duplicate titles'
for asset in assets:assert urllib.request.urlopen(base+asset).status==200
assert not [r for r in extra if r['status']!=200],extra
Path('audit').mkdir(exist_ok=True);Path('audit/route-checks.json').write_text(json.dumps({'routes':results,'extra':extra,'notFound':missing,'assets':len(assets)},indent=2));print(f'{len(results)} routes: 200, one H1, unique titles, descriptions, canonicals. {len(assets)} image paths load. Unknown route: 404. Internal links passed.')
