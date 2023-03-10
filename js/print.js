function downloadimage(){
 var container = document.getElementById("htmltoimage");
 html2canvas(container,{allowTaint : true}).then(function(canvas) {
 var link = document.createElement("a");
 document.body.appendChild(link);
 link.download = "html_image.jpg";
 link.href = canvas.toDataURL();
 link.target = "_blank";
 link.click();
 });
}

window.onload = function () {
    document.getElementById("download2")
        .addEventListener("click", () => {
            const wrapper= this.document.getElementById("htmltoimage");
            console.log(wrapper);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'Card.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'cm', format: 'a4', orientation: 'landscape' }
            };
            html2pdf().from(wrapper).set(opt).save();
        })
}
