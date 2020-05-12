

    $('#form').submit(function(e){
        var input = $('input').val();
        var newRow = `<li><button class="remove">X</button>${input}</li>`;
            $("#newSkill").append(newRow); 
            e.preventDefault()
            $('input').val('');
        $('.remove').on('click', function(){
            $(this).parent().remove();
          });
        });

        // a group of us did this together!! :) Collaboration is honestly what got
        // this bad boy done <3