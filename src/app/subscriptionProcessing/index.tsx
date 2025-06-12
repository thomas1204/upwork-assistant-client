import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router'
import Loader from '../loader';

export default function SubscriptionProcessing() {
  const [remainingTime, setRemainingTime] = useState(20);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 1) {
          clearInterval(countdown);
          navigate('/profile');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Loader />
      <p className="mt-4 text-sm font-medium">
        Finalizing your subscription… ({remainingTime}s remaining)
      </p>
    </div>
  );
}
