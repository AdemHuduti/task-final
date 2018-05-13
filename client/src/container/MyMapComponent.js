import React from 'react';
import { compose, withStateHandlers } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import DataInfoSa from './Data-Info-SA';
import DataInfoSCC from './Data-Info-SCC';
import DataInfoBBI from './Data-Info-BBI';
import DataInfoZM from './Data-Info-ZM';
import DataInfoHA from './Data-Info-HA';
import DataInfoKSI from './Data-Info-KSI';

const SA = { lat: 43.8563, lng: 18.4131 } // Sarajevo
const SCC = { lat: 43.8554, lng: 18.4082 }
const BBI = { lat: 43.8585, lng: 18.4166 }
const ZM = { lat: 43.855026, lng: 18.402623 } // Zemaljski Muzej
const HA = { lat: 43.857327, lng: 18.410087 } // Hastahana
const KSI = { lat: 43.859418, lng: 18.425417 } // Katedrala 
const img = "https://png.icons8.com/color/50/000000/about.png";

const MyMapComponent = compose(
  withStateHandlers(() => ({
    isOpen: false,
    isOpenSCC: false,
    isOpenBBI: false,
    isOpenZM: false,
    isOpenHA: false,
    isOpenKSI: false
  }),
    {
      flipBoxSa: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
      flipBoxSCC: ({ isOpenSCC }) => () => ({
        isOpenSCC: !isOpenSCC,
      }),
      flipBoxBBI: ({ isOpenBBI }) => () => ({
        isOpenBBI: !isOpenBBI,
      }),
      flipBoxZM: ({ isOpenZM }) => () => ({
        isOpenZM: !isOpenZM,
      }),
      flipBoxHA: ({ isOpenHA }) => () => ({
        isOpenHA: !isOpenHA,
      }),
      flipBoxKSI: ({ isOpenKSI }) => () => ({
        isOpenKSI: !isOpenKSI,
      })
    }),
  withScriptjs,
  withGoogleMap
)
  (props => // eslint-disable-line
    <GoogleMap
      defaultZoom={16}
      defaultCenter={SA} >

      {
        // Sarajevo
        props.isMarkerShown &&
        <Marker
          //options={{ icon: img }} // ovako mijenjamo icon
          onClick={props.flipBoxSa}
          position={SA}>
          {
            props.isOpen &&
            <InfoBox >
              <DataInfoSa />
            </InfoBox>
          }
        </Marker>
      }
      {
        // SCC
        props.isMarkerShown &&
        <Marker
          onClick={props.flipBoxSCC}
          position={SCC}>
          {
            props.isOpenSCC &&
            <InfoBox >
              <DataInfoSCC />
            </InfoBox>
          }
        </Marker>
      }
      {
        // BBI
        props.isMarkerShown &&
        <Marker
          onClick={props.flipBoxBBI}
          position={BBI}>
          {
            props.isOpenBBI &&
            <InfoBox >
              <DataInfoBBI />
            </InfoBox>
          }
        </Marker>
      }

      {
        // ZM(Zemaljski muzej)
        props.isMarkerInfoShown &&
        <Marker
          onClick={props.flipBoxZM}
          options={{ icon: img }}
          position={ZM} >
          {
            props.isOpenZM &&
            <InfoBox >
              <DataInfoZM />
            </InfoBox>
          }
        </Marker>
      }

      {
        // Hastahana
        props.isMarkerInfoShown &&
        <Marker
          onClick={props.flipBoxHA}
          options={{ icon: img }}
          position={HA} >
          {
            props.isOpenHA &&
            <InfoBox >
              <DataInfoHA />
            </InfoBox>
          }
        </Marker>
      }

      {
        // Katedrala
        props.isMarkerInfoShown &&
        <Marker
          onClick={props.flipBoxKSI}
          options={{ icon: img }}
          position={KSI} >
          {
            props.isOpenKSI &&
            <InfoBox >
              <DataInfoKSI />
            </InfoBox>
          }
        </Marker>
      }
    </GoogleMap>
  )

export default MyMapComponent;