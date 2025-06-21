import React from 'react';

const ColumnVisibilityToggle = ({ columns, toggleColumn }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label><strong>Toggle Columns:</strong></label>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '5px' }}>
        {columns.map((col) => (
          col.key !== 'actions' && (
            <label key={col.key}>
              <input
                type="checkbox"
                checked={col.visible}
                onChange={() => toggleColumn(col.key)}
                disabled={columns.filter(c => c.visible).length === 1 && col.visible}
              />
              {col.label}
            </label>
          )
        ))}
      </div>
    </div>
  );
};

export default ColumnVisibilityToggle;
