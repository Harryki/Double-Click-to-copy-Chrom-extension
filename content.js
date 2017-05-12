var listener = function() {
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
        var range = selection.getRangeAt(0);
        var text = range.cloneContents().textContent;
        // console.log(text)
        // alert()
        // var BodyHTML = document.body.innerHTML;

        var textFromPrompt = window.prompt("Copy to clipboard", text);
        if(textFromPrompt != null){
            // alert("copied to clipboard")
            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Copying text command was ' + msg);
            } catch (err) {
                console.log('Oops, unable to copy');
            }
        }


        // function highlightText(element) {
        //     var nodes = element.childNodes;
        //     for (var i = 0, l = nodes.length; i < l; i++) {
        //         if (nodes[i].nodeType === 3) {
        //             // Node Type 3 is a text node
        //             var text = nodes[i].innerHTML;
        //             nodes[i].innerHTML = "<span style='background-color:'#FFEA0'>" + text + "</span>";
        //         }
        //         else if (nodes[i].childNodes.length > 0) {
        //             highlightText(nodes[i]);  // Not a text node or leaf, so check it's children
        //         }
        //     }
        // }



    };

}
document.addEventListener('dblclick', listener);

