import { useState } from 'react';

const useAdmin = () => {
    const [admin, setAdmin] = useState(true);

  return [admin, setAdmin];
};

export default useAdmin;