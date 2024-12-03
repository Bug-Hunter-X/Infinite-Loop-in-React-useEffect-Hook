```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render
    console.log('Effect running:', count);
    // This will cause an infinite loop because the count changes,
    // triggering the effect again, and so on.
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```