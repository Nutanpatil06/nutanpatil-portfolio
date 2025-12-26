import { useEffect, useState } from 'react';

export const useVisitorId = () => {
  const [visitorId, setVisitorId] = useState<string>('');

  useEffect(() => {
    let id = localStorage.getItem('visitor_id');
    if (!id) {
      id = `visitor_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
      localStorage.setItem('visitor_id', id);
    }
    setVisitorId(id);
  }, []);

  return visitorId;
};
