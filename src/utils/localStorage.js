export const saveToLocal = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error("Saving to localStorage failed:", err);
  }
};

export const loadFromLocal = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error("Loading from localStorage failed:", err);
    return null;
  }
};
