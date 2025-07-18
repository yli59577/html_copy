const cb = document.getElementById('toggleSearch');
    const changes = document.querySelectorAll('.change');
    const si = document.getElementById('searchInputLi');
    const closeBtn = document.getElementById('closeSearch');


    cb.addEventListener('change', () => {
      if (cb.checked) {
        changes.forEach(li => li.classList.add('hide'));
        si.classList.add('show');
        setTimeout(() => document.getElementById('searchInput').focus(), 300);
      } else {
        changes.forEach(li => li.classList.remove('hide'));
        si.classList.remove('show');
      }
    });
  
  closeBtn.addEventListener('click', () => {
    cb.checked = false;
    cb.dispatchEvent(new Event('change'));
  });



    function showVideoOverlay() {
      const overlay = document.getElementById('videoOverlay');
      const iframe = document.getElementById('videoFrame');
      const container = document.getElementById('videoContainer');

      container.classList.remove('visible');
      overlay.classList.remove('hide');
      overlay.style.display = 'flex';
      overlay.classList.add('show');
      

      overlay.addEventListener('animationend', function handler(e) {
        if (e.animationName === 'fadeInBackground') {
          iframe.src = "https://www.youtube.com/embed/ByAmGw--V74?autoplay=1&mute=1&loop=1&playlist=ByAmGw--V74";
          container.classList.add('visible');
          overlay.removeEventListener('animationend', handler);
        }
      });
  }


  function closeVideoOverlay() {
    const overlay = document.getElementById('videoOverlay');
    const iframe = document.getElementById('videoFrame');
    const container = document.getElementById('videoContainer');

    
    container.classList.remove('visible');

    overlay.classList.remove('show');
    overlay.classList.add('hide');

    

    setTimeout(() => {
      overlay.style.display = 'none';
      overlay.classList.remove('hide');
      iframe.src = ''; 
    }, 500);

  }

  function goFullscreen() {
      const container = document.getElementById('videoContainer');
    container.classList.toggle('maximized');
    }




    document.getElementById('videoOverlay').addEventListener('click', function (e) {
    const container = document.getElementById('videoContainer');


    if (!container.contains(e.target)) {
      closeVideoOverlay();
    }
  });