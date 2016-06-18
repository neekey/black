$(document).ready(function(){

    chrome.storage.sync.get( "rules", function( value ) {
        // Notify that we saved.
        VM.rules = value.rules || [];
    });

    var VM = new Vue({
        el: $( '.J_Options' )[0],
        data: {
            rules: [],
            newRule: ''
        },
        methods: {
            addRule: function( e, rule ){
                e.preventDefault();

                rule = $.trim( rule );
                if( rule ){
                    this.rules.push( rule );
                }

                this.newRule = '';
            },
            removeRule: function(index){
                this.rules.$remove( index );
            },

            ruleChange: function( value, index ){
                this.rules.$set( index, value );
            }
        }
    });

    VM.$watch('rules', function (value, mutation) {
        console.log( 'rules change', value, mutation );

        chrome.storage.sync.set( { rules: value }, function( arguments ) {
            // Notify that we saved.
            console.log( 'save data', arguments );
        });

//         if (mutation) {
//             mutation.method // e.g. 'push'
//             mutation.args // raw arguments to the mutation method
//             mutation.result // return value
//             mutation.inserted // new, inserted elements
//             mutation.removed // removed elements
//         }
    });
})