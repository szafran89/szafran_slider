szafran_slider
==============


A simple jQuery responsive horizontal slider plug-in. Very basic, simple to use and modify.

Options with defaults vaues in version 1.1

    'slidesContainer': 'slider-container',
    'pagination': 'pagination',
    'start': 0,
    'auto': true,
    'delay': 6000

How to use

1. Include Jquery library.
2. Include szafran_slider.js or szafran_slider.min.js 
3. Insert code to HTML document

  <div class="slider">
    <div class="slider-container">
       <img src="<?= URL::base() ?>public/img/slider.png" alt="Dodaj wpis" > 
       <img src="<?= URL::base() ?>public/img/hero.jpg" alt="Jest moc" > 
       <img src="<?= URL::base() ?>public/img/rwd.jpg" alt="Responsywna wersja kataogu" > 
    </div>
    <div class="pagination">
      <div class="child"></div>
      <div class="child"></div>
      <div class="child"></div>
    </div>
  </div>
  
  4. Init plug-in 
  
  $(".slider").szafran_slider();
    
