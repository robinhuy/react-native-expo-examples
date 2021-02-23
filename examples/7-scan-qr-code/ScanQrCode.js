import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Constants from "expo-constants";
import ScannerView from "./ScannerView";

export default function ScanQrCode() {
  const [scanned, setScanned] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  
  const startScan = () => {
    setScanned(false);

    // Request camera permission
    if (!hasPermission) {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }
  };

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`Scanned QR code with data: "${data}"`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {!scanned && hasPermission && (
        <View style={{ flex: 1 }}>
          {/* https://docs.expo.io/versions/latest/sdk/bar-code-scanner/ */}
          <BarCodeScanner
            style={StyleSheet.absoluteFillObject}
            onBarCodeScanned={handleBarCodeScanned}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          />

          <View style={styles.helpTextWrapper}>
            <Text style={styles.helpText}>Find QR Code to scan</Text>
          </View>
        </View>
      )}

      <View style={styles.content}>
        {scanned !== null && hasPermission === null && (
          <Text style={styles.helpText}>Requesting for camera permission</Text>
        )}

        {scanned !== null && hasPermission === false && (
          <Text style={styles.helpText}>No access to camera</Text>
        )}

        {scanned === false && hasPermission && (
          <ScannerView scanned={scanned} />
        )}

        {(scanned !== false) && (
          <TouchableOpacity style={styles.button} onPress={startScan}>
            <Text style={styles.buttonText}>
              {scanned === null ? "Scan now" : "Scan again"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000",
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  helpTextWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  helpText: {
    color: "#fff",
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "#303940",
  },
  buttonText: {
    color: "#fff",
  },
});
