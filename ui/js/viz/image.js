var d3 = require('d3');
var _ = require('lodash');
var templateHTML = require('../../templates/viz/image.jade');

var margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 45
};

var width = 600 - margin.left - margin.right;
var height = 300 - margin.top - margin.bottom;


var ImageViz = function(selector, data, images, opts) {


    console.log('images');
    console.log(selector);
    console.log(images);

    this.$el = $(selector);

    
    this.currentImage = 0;
    this.images = images || [];

    this.$el.append(templateHTML({
        image: this.images[0],
        imageCount: this.images.length
    }));

    var self = this;
    this.$el.find('input.image-slider').change(_.throttle(function() {
        self.$el.find('.image-viz img').attr('src', self.images[$(this).val()]);
        self.$el.find('.image-viz a').attr('href', self.images[$(this).val()]);
    }, 0));

    
};


module.exports = ImageViz;


ImageViz.prototype.addImage = function(image) {
    this.images.push(image);
    this.$el.find('input.image-slider').attr('max', this.images.length - 1);
};





ImageViz.prototype.updateData = function(data) {
    // todo append image to current image stack

};