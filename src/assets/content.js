!(function(){

    chrome.storage.sync.get( "rules", function( value ) {

        var rules = value.rules || [];

        var matched = false;

        rules.forEach(function( value ){
            if( ( new RegExp( value ) ).test( location.href ) ){
                matched = true;
            }
        });

        // 若命中了，就受死吧
        if( matched ){
            document.write( '<div class="horror horror-' + Math.ceil( 6 * Math.random() ) + '">' +
                '<div class="warn-tip">说好的不看了呢</div>' +
                '<audio src="http://zjdx2.sc.chinaz.com/Files/DownLoad/sound1/201402/4147.mp3" autoplay loop ></audio>' +
                '</div>' );
        }
    });

})();