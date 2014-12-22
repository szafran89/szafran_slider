/*
 * jQuery Responsive Horizontal Slider
 *
 * Authored by Paweł Szafrański aka Szafran
 *
 * Copyright 2014, Paweł Szafrański
 * License: GNU General Public License, version 3 (GPL-3.0)
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 */

(function($) {

    $.fn.szafran_slider = function(options) {

        var getRandomInt = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        // slider default settings
        var settings = {
            'slidesContainer': 'slider-container',
            'startSlide': 0,
            'randomStart': false,
            'speed': 500,
            'pagination': true,
            'controls': true,
            'auto': true,
            'delay': 6000
        };

        var getNextSlide = function(e) {
            if (e != undefined)
                e.preventDefault();

            if ($slider.find('.pagination .active').next().size())
                $slider.find('.pagination .active').next().trigger('click');
            else
                $slider.find('.pagination .child').first().trigger('click');
        };

        // set defauls or custom options
        if (options)
            $.extend(settings, options);

        // set basic selectors
        var $slider = this,
                $slidesContainer = $slider.find('.' + settings.slidesContainer),
                $slides = $slidesContainer.children(),
                slidersCount = $slides.size();

        if (settings.randomStart)
            settings.startSlide = getRandomInt(0, slidersCount - 1);

        // set start margin-left
        var start = -settings['startSlide'] * 100 + '%';

        // append pagination
        $slider.append('<div class="pagination">');
        var $pagination = $slider.find('.pagination');

        // append pagination elements
        for (i = 0; i < slidersCount; i++) {
            $pagination.append('<div class="child">');
        }

        // set active pagination element
        $pagination.find('.child').eq(settings.startSlide).addClass('active');

        if (!settings.pagination) {
            $pagination.css('display', 'none');
        }

        $slidesContainer.css({
            'width': (slidersCount * 100 + '%'),
            'margin-left': start
        });

        $slides.css('width', (100 / slidersCount) + '%');

        // click pagination element
        $slider.find('.pagination .child').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            $pagination.find('.child').removeClass('active');
            $this.addClass('active');
            var index = $this.index();
            var newPosition = (index * -100);
            $slidesContainer.animate({'margin-left': (newPosition + '%')}, settings.speed);
        });

        // append prev, next controls
        if (settings.controls) {
            $slider.append('<a href="#" class="prev">');
            $slider.append('<a href="#" class="next">');
        }

        // click prev control
        $slider.find('.prev').click(function(e) {
            e.preventDefault();
            if ($slider.find('.pagination .active').prev().size())
                $slider.find('.pagination .active').prev().trigger('click');
            else
                $slider.find('.pagination .child').last().trigger('click');
        });

        // click next control
        $slider.find('.next').click(function(e) {
            getNextSlide(e);
        });

        // set automatically transition       
        if (settings.auto) {
            setInterval(function() {
                getNextSlide();
            }, settings.delay);
        }
        return true;
    };
})($);
