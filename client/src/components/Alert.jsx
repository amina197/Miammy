import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { AlertWrapper, AlertModal } from '../styled/S-Alert';
import { showBadAlert, showGoodAlert, alertMessage } from '../atoms';

export default function Alert() {
  const [showRedAlert, setShowRedAlert] = useRecoilState(showBadAlert);
  const [showGreenAlert, setShowGreenAlert] = useRecoilState(showGoodAlert);
  const [alert, setAlert] = useRecoilState(alertMessage);
  const [opacity, setOpacity] = useState(1);

  const closeAlert = () => {
    setOpacity(0);

    setTimeout(() => {
      setShowRedAlert(false);
      setShowGreenAlert(false);
      setAlert('');
      setOpacity(1);
    }, 1200);
  };

  useEffect(() => {
    if (showRedAlert || showGreenAlert) {
      setTimeout(() => {
        closeAlert();
      }, 3000);
    }
  }, [alert]);

  return (
    <AlertWrapper>
      {
        showRedAlert || showGreenAlert ? (
          <AlertModal bg={showRedAlert ? 'var(--negative-color)' : 'var(--accent-color)'} op={opacity}>
            <small>{alert}</small>
            <button type="button" onClick={closeAlert}>x</button>
          </AlertModal>
        ) : null
      }
    </AlertWrapper>
  );
}
