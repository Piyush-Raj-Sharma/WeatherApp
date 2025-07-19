
export const saveToLocal = (key, value) =>{
    localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocal = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};