import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sjsys.manutech',
  appName: 'manutech',
  webDir: 'www',
  server: {
    hostname: 'localhost',
    iosScheme: 'http',
    androidScheme: 'http',
    cleartext: true
  }
};

export default config;
