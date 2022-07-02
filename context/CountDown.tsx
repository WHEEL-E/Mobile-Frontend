import { useEffect, useMemo, useState } from "react";
import { getReturnValues } from "../utilities/sentInvitationUtils";

const useCountdown = (targetDate: any) => {
  const countDownDate = useMemo(
    () => new Date(targetDate).getTime() - Date.now(),
    []
  );

  const [countDown, setCountDown] = useState(countDownDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(new Date(targetDate).getTime() - Date.now());
    }, 1000);
    if (countDown <= 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

export { useCountdown };
