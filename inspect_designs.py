import re, pathlib, html as HT
base = pathlib.Path(r'G:\project progamming\AN POS WEB SITE\stitch_minimal_dashboard_redesign')
def fix(s):
    out = []
    for ch in s:
        try:
            out.append(ch.encode('cp1252').decode('utf-8'))
        except Exception:
            out.append(ch)
    return ''.join(out)
def clean(x):
    x = re.sub(r'<[^>]+>', ' ', x)
    x = HT.unescape(x)
    return re.sub(r'\s+', ' ', x).strip()
for d in ['an_pos_2','an_pos_3','an_pos_4','an_pos_5','an_pos_support']:
    txt = fix((base/d/'code.html').read_bytes().decode('utf-8'))
    print('='*16, d)
    heads = [clean(m.group(0)) for m in re.finditer(r'<h1[^>]*>.*?</h1>|<h2[^>]*>.*?</h2>|<h3[^>]*>.*?</h3>|<h4[^>]*>.*?</h4>', txt, re.S)][:40]
    for h in heads:
        print('  H:', h[:140])
