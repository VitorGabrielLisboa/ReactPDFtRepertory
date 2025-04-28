export const generateThumbnail = async (pdfUrl) => {
  try {
    const pdfjsLib = await import("pdfjs-dist/build/pdf");
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    const pdf = await loadingTask.promise;

    const page = await pdf.getPage(1);
    const scale = 0.5;
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: context, viewport }).promise;

    const imageUrl = canvas.toDataURL();
    return imageUrl;
  } catch (error) {
    console.error("Erro ao gerar thumbnail:", error);
    return null;
  }
};
