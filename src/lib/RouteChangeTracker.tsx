import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const trackingId = process.env.REACT_APP_GA_TRACKING_ID;

const RouteChangeTracker: FC = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  // 진입시
  useEffect(() => {
    console.log('진입!!')
    if (!window.location.href.includes('localhost')) {
      if (trackingId) {
        ReactGA.initialize(trackingId);
        return
      }
      console.error('Google Analytics Tracking ID is not defined');
    }
    setInitialized(true);
  }, []);

  // initialized 후
  useEffect(() => {
    if (initialized) {
      ReactGA.set({ page: location.pathname });
      ReactGA.send('pageview');
      console.log('initialized', initialized)
    }
  }, [initialized, location]);
  return null;
}

export default RouteChangeTracker