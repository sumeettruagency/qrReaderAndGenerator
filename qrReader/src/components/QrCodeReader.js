import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import QrReader from 'react-qr-reader';


function QrCodeReader() { 
  const [scanResultWebCam, setScanResultWebCam] =  useState('');

  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
        setScanResultWebCam(result);
    }
   }
  return (
    <Grid container spacing={2}> 
        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <h3>Qr Code Scanner</h3>
            <QrReader
                delay={300}
                style={{width: '100%'}}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
            />
            <h3>Scanned: {scanResultWebCam}</h3>
        </Grid>
    </Grid>
  );
}

export default QrCodeReader;
