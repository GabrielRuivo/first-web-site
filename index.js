let btnPrint = document.querySelector("#save-pdf");
let btnDownload = document.querySelector(".btn-dwn-cv");

btnPrint.addEventListener("click", () => {
    const link = document.createElement("a");

    link.hidden = true;
    link.href = "./cvcv.pdf";
    link.download = "ruivo-cv.pdf";

    document.body.appendChild(link);

    link.click();
    link.remove();
});
