(function($) {
    $.wait = function(time) {
         return $.Deferred(function(dfd) {
               setTimeout(dfd.resolve, time); // use setTimeout internally. 
         }).promise();
    }
}(jQuery));

_password = "aWYgeW91IGdhemUgbG9uZyBlbm91Z2ggaW50byBhbiBhYnlzcywgdGhlIGFieXNzIHdpbGwgZ2F6ZSBiYWNrIGludG8geW91Lg=="

inputElement = document.getElementById('pssinp');

inputElement.value = ""

inputElement.addEventListener('keydown', (event) => {
    if (event.keyCode === 13 && !event.shiftKey) {
        event.preventDefault()
        // do something when the user presses Enter without holding Shift

        login()
    }
});

function login() {
    input = document.getElementById('pssinp')

    if (input.value == password) {
        cor = document.createElement("p")
        cor.innerHTML = "password accepted. processing request... (this could take awhile)"
        cor.id = "resp"

        old = document.createElement("p")
        old.innerHTML = input.value

        cor.style["margin"] = "0"
        cor.style["color"] = "green"
        old.style["margin"] = "0"
 
        document.getElementById("pssinp").remove()
 
        document.getElementById("subcont").appendChild(old)
        document.getElementById("subcont").appendChild(cor)
        document.getElementById("resp").style["margin"] = "0"
 
 
        $.wait(20000).then(function(){ 
            tmp = document.createElement("p")
            tmp.innerHTML = "error: 423 - Unable to access ARCS. Please try again later."
            tmp.style["margin"] = "0"
            tmp.style["color"] = "red"
            document.getElementById("subcont").appendChild(tmp)
        });
    } else {
        cor = document.createElement("p")
        cor.innerHTML = "password denied."
        cor.id = "resp"

        old = document.createElement("p")
        old.innerHTML = input.value

        cor.style["margin"] = "0"
        cor.style["color"] = "red"
        old.style["margin"] = "0"
 
        document.getElementById("pssinp").remove()
 
        document.getElementById("subcont").appendChild(old)
        document.getElementById("subcont").appendChild(cor)
        document.getElementById("resp").style["margin"] = "0"
 
 
        $.wait(4000).then(function(){
            
            cor.remove()
            old.remove()

            tmp = document.createElement("textarea")
            tmp.value = ""
            tmp.id = "pssinp"
            tmp.setAttribute("spellcheck", "false")
            
            document.getElementById("subcont").appendChild(tmp)



            inputElement = document.getElementById('pssinp');
            inputElement.addEventListener('keydown', (event) => {
                if (event.keyCode === 13 && !event.shiftKey) {
                    event.preventDefault()
                    // do something when the user presses Enter without holding Shift
            
                    login()
                }
            });
        });
    }
}