// Small accessibility helper: allow Enter on focused card buttons
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.btn').forEach(btn=>{
    btn.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        btn.click();
      }
    });
  });
});
