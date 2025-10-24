// src/components/TestComponent.tsx
import React from 'react';

const TestComponent = () => {
  // This will show red underlines for formatting issues
  const unusedVar = 'test'; // ESLint should warn about unused variable

  return (
    <div>
      <h1>Test Component</h1>
      <p>This has inconsistent indentation</p>
    </div>
  );
};

export default TestComponent;
