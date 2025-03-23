{ pkgs, ... }: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.jdk21_headless
    pkgs.gradle
    pkgs.android-tools
    pkgs.watchman
    pkgs.curl # Add curl for health checking Metro
  ];
  idx = {
    extensions = [
      "msjsdiag.vscode-react-native"
      "dbaeumer.vscode-eslint"
      "esbenp.prettier-vscode"
    ];
    workspace = {
      onCreate = {
        install = ''
          # Install dependencies
          npm install --prefer-offline --no-audit --no-progress

          # Create local Android SDK directory in home folder
          mkdir -p $HOME/.android-sdk-local
          export ANDROID_SDK_ROOT=$HOME/.android-sdk-local
          export ANDROID_HOME=$ANDROID_SDK_ROOT

          # Accept Android SDK licenses
          mkdir -p $ANDROID_SDK_ROOT/licenses
          echo "24333f8a63b6825ea9c5514f83c2829b004d1fee" > $ANDROID_SDK_ROOT/licenses/android-sdk-license
          echo "d56f5187479451eabf01fb78af6dfcb131a6481e" >> $ANDROID_SDK_ROOT/licenses/android-sdk-license
          echo "84831b9409646a918e30573bab4c9c91346d8abd" > $ANDROID_SDK_ROOT/licenses/android-sdk-preview-license

          # Add more memory to the JVM
          sed -i 's/org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m/org.gradle.jvmargs=-Xmx4g -XX:MaxMetaspaceSize=512m/' "android/gradle.properties"

           # Print success message in green
           echo -e "\n\033[1;32m╭──────────────────────────────────────────────────────────╮\033[0m"
           echo -e "\033[1;32m│ ✓ Dependencies installed successfully!                   │\033[0m"
           echo -e "\033[1;32m│                                                          │\033[0m"
           echo -e "\033[1;32m│ Preview initialization in progress...                    │\033[0m"
           echo -e "\033[1;32m│ To view logs: Open Output panel and select IDX           │\033[0m"
           echo -e "\033[1;32m│ (View > Output > IDX)                                    │\033[0m"
           echo -e "\033[1;32m╰──────────────────────────────────────────────────────────╯\033[0m\n"
        '';
      };
    };
    previews = {
      enable = true;
      previews = {
        android = {
          command = [
            "sh"
            "-c"
            ''
              # Set the correct emulator to use
              export ANDROID_SERIAL=emulator-5554

              # Start watchman
              watchman watch $PWD

              # Set the correct Metro port environment variable
              export RCT_METRO_PORT=$PORT

              npm start &
              METRO_PID=$!

              # Wait for Metro to be available
              until curl -s http://localhost:$PORT/status > /dev/null; do
                sleep 1
              done

              npm run android
              wait $METRO_PID
            ''
          ];
          manager = "web";
        };
      };
    };
  };
}
