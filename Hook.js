import { useState, useEffect } from 'react';

// call a fictious database to see if a user is active
export function useUserActive(userId) {
  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    // imagine calling an API here, with userId
    setTimeout(() => setIsActive(Math.random() > 0.5), 1000)
  }, []);

  return isActive;
}