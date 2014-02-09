$(document).ready(function() {

    // grab the list to avoid nested insertions
    var imdb_watchlist = $('.list_item a');

    // iterate over original list
    imdb_watchlist.each(function () {
        // extract imdb_id from href
        var href = $(this).attr('href');
        var imdb_id = href.split('/');

        // if found an imdb_id...
        if (imdb_id.length > 2) {

            // construct caisi url
            var url = 'http://www.canistream.it/external/imdb/' + imdb_id[2]

            // insert iframe after parent's element
            $(this).parent().after('<iframe frameborder="0" src="' + url + '/github-joaquincasares/?l=mini-bar" width="100%" height="200px" scrolling="no"></iframe>');
        }

        // To avoid smashing the server
        setTimeout(function() { }, 3000);
    });
});
