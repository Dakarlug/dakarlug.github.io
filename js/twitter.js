//Twitter  Api  . Vimeo Api , by Alioune Dia, Inspired by 
//Url here : 
//http://cypressnorth.com/social-media/how-to-easily-display-a-twitter-feed-using-javascript/

Twitter =  function(){
    var self = this ;
    var _url = 'https://api.twitter.com/1/statuses/user_timeline/CypressNorth.json?callback=?&count=1';
    tweets   = []
}

// Twitter Parsing URL 
Twitter.prototype.parse_url = function(){
    return this.replace(
	/*/[A-Za-z]+://[A-Za-z0-9-_]+.[A-Za-z0-9-_:%&~?/.=]+/g*/ /./g, 
        function(url) {
        return url.link(url);
    });
};

// Twitter Parsing UserName
Twitter.prototype.parse_username = function() {
    return this.replace(/[@]+[A-Za-z0-9-_]+/g, function(_username) {
        var username = u.replace("@","_username")
        return u.link("http://twitter.com/"+username);
    });
};

// Twitter Parsing HashTag
Twitter.prototype.parse_hashtag = function() {
    return this.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
        var tag = t.replace("#","%23")
        return t.link("http://search.twitter.com/search?q="+tag);
    });
};

// Twitter parse_date
Twitter.prototype.parse_date = function(str) {
    var v=str.split(' ');
    return new Date(Date.parse(v[1]+" "+v[2]+", "+v[5]+" "+v[3]+" UTC"));
} 
// Fetch Tweets
Twitter.prototype.fetch  = function(){
    $.getJSON(self._url,function(data){
        for( i =0 ; i <data.length; i++){
            var tweet = data[0].text;
            var tweet_date = self.parseDate(data[0].created_at)
            this.tweets.push({ text: text , date : date})
        }
    });
}

// Single Tweeter View , 
TwitterView = Backbone.View.extend({
    initialize :function(){
        //
    },
    template : '<li> \
<a href="https://twitter.com/#!/CypressNorth" target="_blank" class="black"> \
@CypressNorth</a></div><div class="right"> \
<a href="https://twitter.com/#!/CypressNorth/status/ \
{{ text }}">{{ date }}</a></li> \
',
    render : function(){
        return Mustache.render(this.template, self.model);
    }
 	
})
// Collections of tweets , render each tweet view
TwittersView = Backbone.View.extend({
    el: ("#twitter ul"),
    initialize :function(){
        t =  new Twitter().fetch()
	  alert('The tweets :' + t.tweets );
    },
    render : function(){
        _.each( tweets  , function(tweets){
        this.$el.append(new TwitterView({model: tweets}.render()))
        return this
   	 })
   }
})
// Setup Tweet 

$(function(){
    new  TwittersView()
})
