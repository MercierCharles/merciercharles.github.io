// Import styles
import './style.css'

// Initialize PDF viewer
PDFObject.embed("assets/update.pdf", "#pdf-viewer", {
    fallbackLink: "<p>This browser does not support embedded PDFs. Please <a href='[url]'>download the PDF</a> to view it.</p>",
    width: "100%",
    height: "100%"
});

// Your JavaScript code can go here 