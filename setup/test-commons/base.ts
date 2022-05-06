import type {Config} from '@jest/types';
import path from 'path'; 

// Sync object
const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  verbose: true,
  setupFilesAfterEnv: [
    path.resolve(__dirname, 'src', 'setupTests.js'),
  ],
  transform: {
    '\\.[jt]sx?$': ['babel-jest', {
      configFile: path.resolve(__dirname, '.babelrc'),
    }],
  }
};
export default config;
