var listener = function() {
    

}

// document.addEventListener("dblclick", listener);

window.addEventListener('click', function (evt) {
    if (evt.detail === 3) {
        // alert('triple click!');

        var selection = window.getSelection();
        if (selection.rangeCount > 0) {
            var range = selection.getRangeAt(0);
            var text = range.cloneContents().textContent;
            console.log(text);
        // alert()
        // var BodyHTML = document.body.innerHTML;

        if(text != null){
            try{
                var successful = document.execCommand('copy');
            }catch (err){
                console.log('Oops, unable to copy');
            }
        }


        // var textFromPrompt = window.prompt("Copy to clipboard", text);

        // if(textFromPrompt != null){
        //     // alert("copied to clipboard")
        //     try {
        //         var successful = document.execCommand('copy');
        //         // var msg = successful ? 'successful' : 'unsuccessful';
        //         // console.log('Copying text command was ' + msg);
        //     } catch (err) {
        //         console.log('Oops, unable to copy');
        //     }
        // }

    };
}
});