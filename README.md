
# React Native Project

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using the React Native CLI.

## Getting Started

### Running the App

The development environment is already set up with all necessary dependencies. You can start developing right away!

#### Android

To run your app on Android:

```bash
npm run android
```

This will:
1. Start the Metro bundler if it's not already running
2. Build the Android app
3. Install and launch it on the Android emulator

#### iOS

To run your app on iOS (requires macOS):

```bash
npm run ios
```

### Development

The Metro bundler will start automatically when you run the app. If you need to start it manually:

```bash
npm start
```

### Testing and Linting

Run tests:
```bash
npm test
```

Run linter:
```bash
npm run lint
```

## Project Structure

```
your-project/
├── android/               # Android native code
├── ios/                  # iOS native code
├── src/                  # JavaScript/TypeScript source code
│   ├── components/       # Reusable components
│   ├── screens/         # Screen components
│   └── App.tsx          # Application entry point
├── __tests__/           # Test files
├── .idx/                # IDX configuration
└── package.json         # Project dependencies and scripts
```

## Useful Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Native CLI](https://github.com/react-native-community/cli)
- [Metro Bundler](https://facebook.github.io/metro/)
- [React Native Testing](https://reactnative.dev/docs/testing-overview)

## Troubleshooting

### Metro Bundler Issues
If you encounter issues with Metro bundler:
1. Clear Metro cache: `npm start --reset-cache`
2. Make sure Watchman is running properly
3. Check the terminal output for specific error messages

### Android Build Issues
If you encounter Android build issues:
1. Check that ANDROID_HOME is properly set
2. Ensure Android SDK tools are properly installed
3. Try cleaning the build: `cd android && ./gradlew clean`

### iOS Build Issues
If you encounter iOS build issues:
1. Make sure you have Xcode installed (macOS only)
2. Try cleaning the build: `cd ios && pod install`
3. Clear derived data in Xcode

## License

This project is open source and available under the MIT License.
