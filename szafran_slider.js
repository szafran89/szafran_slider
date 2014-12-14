(function($) {
    $.fn.szafran_slider = function(options) {
        var settings = {
            'slidesContainer': 'slider-container',
            'pagination': 'pagination',
            'start': 0,
            'auto': true,
            'delay': 6000
        };

        if (options)
            $.extend(settings, options);

        var $slider = this;
        var $slidesContainer = $slider.find('.' + settings['slidesContainer']);
        var $slides = $slidesContainer.children();
        var $pagination = $slider.find('.' + settings['pagination']);
        var slidersCount = $slides.size();
        var start = -settings['start'] * 100 + '%';

        $pagination.find('.child').eq(settings['start']).addClass('active');

        $slidesContainer.css({
            'width': (slidersCount * 100 + '%'),
            'margin-left': start
        })

        $slides.css('width', (100 / slidersCount) + '%');

        $('.pagination .child').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            $pagination.find('.child').removeClass('active');
            $this.addClass('active');
            var index = $this.index();
            var newPosition = (index * -100);
            $slidesContainer.animate({'margin-left': (newPosition + '%')}, 'slow');
        })
        if (settings['auto']) {
            setInterval(function() {
                if ($('.pagination .active').next().size())
                    $('.pagination .active').next().trigger('click');
                else
                    $('.pagination .child').first().trigger('click');
            }, settings['delay']);
        }
        return true;
    };
})($);
