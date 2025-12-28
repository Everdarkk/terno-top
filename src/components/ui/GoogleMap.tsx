'use client';

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import styles from '../../styles/GoogleMap.module.css'

// COORDINATES
const BUSINESS_LOCATION = { lat: 49.5649121, lng: 25.636221 };

export default function GoogleMap() {
  return (
    <section className={styles.container}>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}>
        {/* MAP */}
        <Map
          style={{ width: '100%', height: '100%' }}
          defaultCenter={BUSINESS_LOCATION}
          defaultZoom={18}
          gestureHandling={'cooperative'}
          disableDefaultUI={false}
        >
          {/* MARKER */}
          <Marker position={BUSINESS_LOCATION} />
          
        </Map>

      </APIProvider>
    </section>
  );
}