const TestComponent = () => {
  const unusedVar = 'test';
  const anotherUnusedVar = 'test2';

  return (
    <div>
      <h1>Test Component</h1>
      <p>This has inconsistent indentation</p>
      <p>
        {unusedVar}-{anotherUnusedVar}
      </p>
    </div>
  );
};

export default TestComponent;
