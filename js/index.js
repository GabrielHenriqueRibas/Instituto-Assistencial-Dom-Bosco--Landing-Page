document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('text');
    const text = "Prometi a Deus que até meu último suspiro seria para os jovens (São João Bosco).";
    let index = 0;
    let isDeleting = false;
    let deleteIndex = text.length;

    function writeText() {
        if (!isDeleting) {
            if (index < text.length) {
                textElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(writeText, 100);
            } else {
                
                setTimeout(deleteText, 2000); 
            }
        }
    }

    function deleteText() {
        if (deleteIndex > 0) {
            textElement.innerHTML = text.substring(0, deleteIndex - 1);
            deleteIndex--;
            setTimeout(deleteText, 100);
        } else {
            index = 0;
            deleteIndex = text.length;
            setTimeout(writeText, 1000); 
        }
    }

    writeText();
});
