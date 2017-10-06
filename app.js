;(function( doc ) {

  $(document).ready(function(){

    function sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
          break;
        }
      }
    }

  request = new XMLHttpRequest();  

  var sending = false

  setInterval(
    function(){
      console.log('Tentando localizar mensagens...')

      if (!sending) {
        if ($('.chat.unread').length > 0) {
          sending = true

          $.ajax({
            async: false,
            url: 'https://condominiodedicado.com.br/bot/?' + $.param({
              "type": "mouse-move",
              "x": $('.chat.unread')[0].getBoundingClientRect().x + 200,
              "y": $('.chat.unread')[0].getBoundingClientRect().y + 127,
            }),
            success: function() {
              $.ajax({
                async: false,
                url: 'https://condominiodedicado.com.br/bot/?' + $.param({"type": "mouse-click"}),
                success: function() {
                  setTimeout(function(){
                    $.ajax({
                      async: false,
                      url: 'https://condominiodedicado.com.br/bot/?' + $.param({
                        "type": "mouse-move",
                        "x": $('.pluggable-input-placeholder')[0].getBoundingClientRect().x + 40,
                        "y": $('.pluggable-input-placeholder')[0].getBoundingClientRect().y + 87,
                      }),
                      success: function() {
                        $.ajax({
                          async: false,
                          url: 'https://condominiodedicado.com.br/bot/?' + $.param({
                            "type": "mouse-click",
                          }),
                          success: function() {
                            $.ajax({
                              async: false,
                              url: 'https://condominiodedicado.com.br/bot/?' + $.param({
                                "type": "keyboard-input",
                                "text": "Ola, tudo bem?"
                              }),
                              success: function() {
                                setTimeout(function(){
                                  $.ajax({
                                    async: false,
                                    url: 'https://condominiodedicado.com.br/bot/?' + $.param({
                                      "type": "mouse-move",
                                      "x": $('[data-icon="send"]')[0].getBoundingClientRect().x + 20,
                                      "y": $('[data-icon="send"]')[0].getBoundingClientRect().y + 100
                                    }),
                                    success: function() {                 
                                      $.ajax({
                                        async: false,
                                        url: 'https://condominiodedicado.com.br/bot/?' + $.param({
                                          "type": "mouse-click"
                                        }),
                                        success: function() {                 
                                          $.ajax({
                                            async: false,
                                            url: 'https://condominiodedicado.com.br/bot/?' + $.param({
                                              "type": "mouse-move",
                                              "x": $('[data-icon="pinned"]').closest('.infinite-list-item')[0].getBoundingClientRect().x + 200,
                                              "y": $('[data-icon="pinned"]').closest('.infinite-list-item')[0].getBoundingClientRect().y + 127,
                                            }),
                                            success: function() {                 
                                              $.ajax({
                                                async: false,
                                                url: 'https://condominiodedicado.com.br/bot/?' + $.param({
                                                  "type": "mouse-click",
                                                }),
                                                success: function() {                 
                                                  sending = false
                                                }
                                              })
                                            }
                                          })
                                        }
                                      })
                                    }
                                  })
                                }, 1200)                                
                              }
                            })                          
                          }
                        })
                      }
                    })
                }, 1200);
                 
                }
              })
            }
          })

        }
      } else {
        sleep(4000)
      }

        /*if (!sending) {
          
          sending = true

          $.get( 'https://condominiodedicado.com.br/bot/?' + $.param({
            "type": "mouse-move",
            "x": $('.chat.unread')[0].getBoundingClientRect().x + 200,
            "y": $('.chat.unread')[0].getBoundingClientRect().y + 127,
          }), () => {
            $.get( 'https://condominiodedicado.com.br/bot/?' + $.param({
              "type": "mouse-click"
            }), () => {
              $.get( 'https://condominiodedicado.com.br/bot/?' + $.param({
                "type": "keyboard-input",
                "text": "Olá!"
              }), () => {
                $.get( 'https://condominiodedicado.com.br/bot/?' + $.param({
                  "type": "mouse-move",
                  "x": $('[data-icon="send"]')[0].getBoundingClientRect().x + 20,
                  "y": $('[data-icon="send"]')[0].getBoundingClientRect().y + 100
                }), () => {
                  $.get( 'https://condominiodedicado.com.br/bot/?' + $.param({
                    "type": "mouse-click"
                  }), () => {
                    $.get( 'https://condominiodedicado.com.br/bot/?' + $.param({
                      "type": "mouse-move",
                      "x": $('[data-icon="pinned"]').closest('.infinite-list-item')[0].getBoundingClientRect().x + 200,
                      "y": $('[data-icon="pinned"]').closest('.infinite-list-item')[0].getBoundingClientRect().y + 127,
                    }), () => {
                      $.get( 'https://condominiodedicado.com.br/bot/?' + $.param({
                        "type": "mouse-click",
                      }), function() {
                        sending = false
                      } )
                    } )
                  } )
                } )
              } )
            } )
          } )
        } else {
          sleep(4000);
        }*/

    },
    3000
  );

  })
  
  })( document );