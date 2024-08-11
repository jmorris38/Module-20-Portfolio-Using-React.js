// Import PDFComp styles from PDFComp.css.
import "../Styles/PDFComp.css";
// Import the PDF file.
import Justin from "../assets/JustinMorrisResume.pdf";
// Import the useState hook from React.
import { useState } from "react";
// Import the pdfjs, Document, and Page components from react-pdf.
import { pdfjs, Document, Page } from "react-pdf";
// Set the workerSrc for the pdfjs library.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
// Export the PDFComponent to be used in the Resume component.
export default function PDFComponent() {
  const [numPages, setNumPages] = useState();
  // Create a function to set the number of pages in the PDF.
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  // Return the JSX for the PDFComponent.
  return (
    <div className="pdf-container">
      <Document file={Justin} onLoadSuccess={onDocumentLoadSuccess}>
        {/* Create an array of pages to display the PDF. */}
        {Array.apply(null, Array(numPages))
          .map((_, i) => i + 1)
          .map((page) => {
            return (
              <Page
                key={page}
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="pdf-page"
              />
            );
          })}
      </Document>
    </div>
  );
}
