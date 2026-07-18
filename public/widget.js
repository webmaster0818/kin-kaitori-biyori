(function() {
  var s = document.currentScript;
  if (!s) return;
  var box = document.createElement('div');
  box.setAttribute('style', 'box-sizing:border-box;max-width:320px;font-family:-apple-system,"Hiragino Sans","Noto Sans JP",sans-serif;border:1px solid #d9c58a;border-radius:12px;padding:14px 16px;background:linear-gradient(135deg,#fffdf5,#faf3df);color:#3a3326;line-height:1.5;');
  box.innerHTML = '<div style="font-size:11px;color:#8a7a55;margin-bottom:4px;">本日の金買取相場の目安（2026-07-18・田中貴金属公表値より純度換算）</div>'
    + '<div style="font-size:22px;font-weight:700;color:#9a7b2d;">K24 21,785円<span style="font-size:12px;font-weight:400;">/g</span></div>'
    + '<div style="font-size:13px;margin-top:2px;">K18 16,339円/g ・ K14 12,708円/g</div>'
    + '<div style="font-size:11px;margin-top:8px;"><a href="https://gold-biyori.com/souba-dashboard/" target="_blank" rel="noopener" style="color:#9a7b2d;text-decoration:underline;">金買取日和｜金価格ダッシュボード</a>（毎日自動更新）</div>'
    + '<div style="font-size:10px;color:#9b8e6e;margin-top:4px;">※理論上の目安。実際の買取額は業者・状態により異なります。</div>';
  s.parentNode.insertBefore(box, s);
})();
