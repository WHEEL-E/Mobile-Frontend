import { useEffect, useMemo, useState } from "react";
import { getReturnValues } from "../utilities/types/sentInvitationsTypes";

const useCountdown = (targetDate: any) => {
  const sevenDays = 7 * 24 * 60 * 60 * 1000;
  const countDownDate = useMemo(
    () => sevenDays + new Date(targetDate).getTime() - Date.now(),
    []
  );

  const [countDown, setCountDown] = useState(countDownDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(
        (t) => sevenDays + new Date(targetDate).getTime() - Date.now()
      );
    }, 1000);
    if (countDown <= 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

export { useCountdown };
