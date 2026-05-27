import { useState } from 'react';

function WarningBanner({ warn }) {
  if (!warn) return null;
  return <div className="warning">Warning</div>;
}

export default function RenderNull() {
  const [warn, setWarn] = useState(false);

  return (
    <div>
      <WarningBanner warn={warn} />
      <button type="button" onClick={() => setWarn((value) => !value)}>
        {warn ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}
