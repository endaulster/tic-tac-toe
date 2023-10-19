function gameShelter () {

    // Cache Dom
    function cacheDom(){
        let boxes = Array.from(document.querySelectorAll("box"));
        boxes.forEach(cul => cul.addEventListener("mousedown", function()
        {
            cul.style.backgroundColor="white";
        }
        ));
    }
    cacheDom();


}

