//Vimeo Api. Vimeo Api, by Alioune Dia, Inspired by 
//Andrew Nesbitt
Vimeo = function(){
    var self    = this 
    this.videos = [];
    //this.keyword; // Keyword to filter videos by.
    //this.user = 'user20281826'
    //this.user = 'user202823'
    //this.user = 'forwardtechnology'
    //this.type = 'videos';

}
//Format  Video
Vimeo.prototype.load =  function(data){
    for( i = 0; i< data.length; i++) {
        this.videos.push({
        title : data[i].title ,
        url   : data[i].url ,
        thumbnail_medium : data[i].thumbnail_medium 
        });
    }
    // limit
    if (data.length >4){
	this.videos = this.videos.slice(1,4)
    }	
}
/*jshint multistr:true */
//render a item
VimeoView =  Backbone.View.extend({
    template: ' <li class="video">\
<a href="{{ url }}" class="link" target="_blank">\
<img class="thumb" src="{{ thumbnail_medium }}" \
alt="LNUG Jan 2013 - Darach Ennis" width="150">\
<p class="title">{{ title }}</p>\
</a>\
</li>\
    ',
    initialize : function(){
        this.render();
    },
    render : function(){
        return Mustache.render(
            this.template, this.model);
    }
}
)
//render a collection 
VimeosView =  Backbone.View.extend({
    el: ("#vimeo ul"),
    initialize : function(){
        this.render();
        },
        render : function(){
            var v ="";
            _.each(this.model , 
            function(video){
                //test
                //alert("video" + video.url);
                v = v + new VimeoView(
                    {model : video}
                ).render()	
            }
	    )
	    this.$el.append(v);
            return this
        }
}
)
//Initializing videos
my_init = function(){
    var options;
    options = {
        url :"http://vimeo.com/api/v2/\
forwardtechnology/videos.json",
        port: 80,
    }
    $.ajax({
        url: options.url,
        dataType: "jsonp",
        crossDomain: true
    }
    ).done(function(data){
        v = new Vimeo()
        v.load(data);
        new  VimeosView({model: v.videos});
    }
)
}
$(function(){
    my_init();
})
