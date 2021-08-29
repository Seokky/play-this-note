import React from 'react';

import './PairCircle.css';

export default function PairCircle({ string, note }: { string: string; note: string }) {
  return (
    <div className="string-circle">
      <span className="string-text">{string}</span>

      <div className="note-circle">
        <span className="note-text">{note}</span>
      </div>
    </div>
  );
}
