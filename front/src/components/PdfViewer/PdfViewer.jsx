import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './PdfViewer.css';

const PdfViewer = () => {
  const pdfUrl = 'documents/AkshayResume.pdf'; 
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
 
  return (
    <div className='pdf-container'>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        {defaultLayoutPluginInstance?<Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />:'No PDF'}
      </Worker>
    </div>
  );
};

export default PdfViewer;