import jsPDF from 'jspdf';
import React from 'react';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';
import { FaFileExcel, FaRegFilePdf } from 'react-icons/fa';
import { LuFileJson } from 'react-icons/lu';
const exportToCSV = (data, columns, fileName = 'export.csv') => {
  const visibleCols = columns.filter((col) => col.visible && col.exportable !== false);
  const headers = visibleCols.map((col) => col.label);
  const rows = data.map((row) =>
    visibleCols.map((col) => {
      const value = row[col.key];
      return col.format ? col.format(value) : value;
    })
  );

  let csvContent =
    [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
};


const exportToJSON = (data, columns, fileName = 'export.json') => {
  const visibleCols = columns.filter((col) => col.visible && col.exportable !== false);
  const filteredData = data.map((row) => {
    const newObj = {};
    visibleCols.forEach((col) => {
      newObj[col.label] = col.format ? col.format(row[col.key]) : row[col.key];
    });
    return newObj;
  });

  const blob = new Blob([JSON.stringify(filteredData, null, 2)], {
    type: 'application/json',
  });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
};
 const exportToPDF = (data, columns) => {
    const doc = new jsPDF();
    const visibleColumns = columns.filter(col => col.exportable !== false && col.visible !== false);

    const tableColumn = visibleColumns.map(col => col.label);
    const tableRows = data.map(row =>
      visibleColumns.map(col => row[col.key])
    );

   autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 20,
    styles: {
      fontSize: 10,
    },
    headStyles: {
      fillColor: [59, 130, 246], 
    },
  });

  doc.save('table_data.pdf');
  };

const ExportButtons = ({ data, columns }) => (
  <div style={{ marginBottom: '1rem' }}>
    <button onClick={() => exportToCSV(data, columns)}>Export CSV   <FaFileExcel style={{color:"green"}}/></button>
    <button onClick={() => exportToJSON(data, columns)}>Export JSON <LuFileJson/></button>
    <button onClick={()=>exportToPDF(data,columns)}>Export PDF  <FaRegFilePdf  style={{color:"red"}}/></button>
  </div>
);

export default ExportButtons;
