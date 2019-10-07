export default (key, initialValue) => {
  if (typeof key !== 'string') {
    throw new Error('key must be a string');
  }
  const [storedValue, setStoredValue] = React.useState(() => {
    const local = localStorage.getItem(key);
    return local ? JSON.parse(local) : initialValue;
  });

  const setValue = value => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };
  return [storedValue, setValue];
};
