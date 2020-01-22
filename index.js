let btnPrint = document.querySelector(".btn-cv");
let btnDownload = document.querySelector(".btn-dwn-cv");

function imprimirCv () {
    window.print()
}

    const pdfUrl = "download/teste.txt";

    const downloadName = "cv.txt";

    btnDownload.url = pdfUrl;

    btnDownload.download = downloadName;
