document.addEventListener('DOMContentLoaded', () => {
    const texttopScroll = document.getElementById('texttop-scroll');
    const btnTexttopLeft = document.getElementById('btn-texttop-left');
    const btnTexttopRight = document.getElementById('btn-texttop-right');
    
    if (texttopScroll && btnTexttopLeft && btnTexttopRight) {
      // Khi nhấn nút "Cuộn về đầu"
      btnTexttopLeft.addEventListener('click', () => {
        texttopScroll.scrollLeft = 0; // Cuộn về đầu
        btnTexttopLeft.classList.add('hidden');
        btnTexttopRight.classList.remove('hidden');
      });
  
      // Khi nhấn nút "Cuộn đến cuối"
      btnTexttopRight.addEventListener('click', () => {
        texttopScroll.scrollLeft = texttopScroll.scrollWidth; // Cuộn đến cuối
        btnTexttopRight.classList.add('hidden');
        btnTexttopLeft.classList.remove('hidden');

      });
  
        
    } else {
      console.error('Element(s) not found.');
    }
  });
  