    function toggleDarkMode() {
        var body = document.body;
        var button = document.querySelector('button');
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
        button.innerHTML = '<i class="fa-solid fa-cloud-sun">  Light Mode</i>';
        } else {
        button.innerHTML = '<i class="fa-sharp fa-solid fa-cloud-moon">  Dark Mode</i> ';
        }
        }


    const texts = ['Computer Science Student', 'CCCI Intern', 'A Web Developer.'];
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        const text = texts[textIndex];
        const currentText = text.substring(0, charIndex);
        document.querySelector('.typing-text').textContent = currentText;
        charIndex++;
        if (charIndex > text.length) {
          charIndex = 0;
          textIndex++;
          if (textIndex >= texts.length) {
            textIndex = 0;
          }
        }
      }
      
      setInterval(type, 150);

      
      var musicIcon = document.querySelector('.music-icon');
      var musicContainer = document.getElementById('music-container');

      musicIcon.addEventListener('click', function() {
        if (musicContainer.style.display === 'none') {
          musicContainer.style.display = 'block';
        } else {
          musicContainer.style.display = 'none';
        }
      });

   
      var motorIcon = document.querySelector('.motor-icon');
      var motorContainer = document.getElementById('motor-container');
      
      motorIcon.addEventListener('click', function() {
        if (motorContainer.style.display === 'none') {
            motorContainer.style.display = 'block';
        } else {
            motorContainer.style.display = 'none';
        }
      });


      var bballIcon = document.querySelector('.bball-icon');
      var bballContainer = document.getElementById('bball-container');
    
      bballIcon.addEventListener('click', function() {
        if (bballContainer.style.display === 'none') {
            bballContainer.style.display = 'block';
        } else {
            bballContainer.style.display = 'none';
        }
      });
      
      var compIcon = document.querySelector('.comp-icon');
      var compContainer = document.getElementById('comp-container');

      compIcon.addEventListener('click', function() {
        if (compContainer.style.display === 'none') {
            compContainer.style.display = 'block';
        } else {
            compContainer.style.display = 'none';
        }
      });
    
      

      