<img src="https://github.com/Supernova-Studio/exporter-android/blob/main/readme-icon.png?raw=true" alt="Supernova Logo" style="max-width:100%;">

[Supernova](https://supernova.io) is a design system platform that manages your assets, tokens, components and allows you to write spectacular documentations for your entire teams. And because you found your way here, you are probably interested in its most advanced functionality - automatic hand-off of design and development assets, tokens and data in general. To learn everything Supernova, please check out our [developer documentation](https://developers.supernova.io/)


# Android Exporter


The Android exporter allows you to **produce production-ready code for all product styles (such as colors) defined inside your design system** in such a way that you can immediately use them to style your application elements. Specifically, this exporter automates the coding of:

- [x] Color definitions
- [x] Text Styles
- [x] Fonts
- [x] Radii
- [x] Measures

The exporter will generate a file per style type. Here's an example of the exporter ouput for a single `11 Regular Italic` text style:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>

    <style name="_11RegularItalic">
        <item name="android:textSize">11sp</item>
        <item name="android:letterSpacing">0.3</item>
        <item name="android:fontFamily">@font/roboto_regular</item>
        <item name="android:textStyle">normal</item>
    </style>

</resources>
```

A corresponding **font/roboto.xml** file will be created:

```xml
<?xml version="1.0" encoding="utf-8"?>
<font-family xmlns:app="http://schemas.android.com/apk/res-auto">  

    <font
        app:fontStyle="normal"
        app:fontWeight="400"
        app:font="@font/roboto_regular" />

</font-family>    
```

Note: exporter doesn't provide required font files (.ttf, .otf). Please, download all necessary font files from your Design System Management system or Google Fonts service. After that, name them accordingly and put next to the corresponding font XML files.

For example above, a Roboto Regular font needs to be downloaded from https://fonts.google.com/, named as **roboto_regular.ttf** and placed next to **font/roboto.xml** file.

You can generate all production ready-code either manually using Supernova's [VS Code extension](https://marketplace.visualstudio.com/items?itemName=SupernovaIO.pulsar-vsc-extension), or automate your code delivery pipeline using Supernova [Design Continuous Delivery](https://supernova.io/automated-code-delivery).


## Example Usage

Once you have run the exporter against your design system, you can start using the code in your codebase right away. Here are a few examples of how you can use the output of the Android exporter:

### Using a text style

```xml
<TextView
    style="@style/_11RegularItalic"
    android:id="@+id/text_home"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_marginStart="8dp"
    android:layout_marginTop="8dp"
    android:layout_marginEnd="8dp"
    app:layout_constraintBottom_toBottomOf="parent"
    app:layout_constraintEnd_toEndOf="parent"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintTop_toTopOf="parent" />
```

## Installing

In order to make the Supernova Android exporter available for your organization so you can start generating code from your design system, please follow the installation guide in our [developer documentation](https://developers.supernova.io/using-exporters/installing-exporters).

## Development

To build and contribute, there are a few steps to get started:

1. Clone the repository
    ```bash
    cd ~/Developer/
    git clone https://github.com/Acornsgrow/exporter-android.git
    ```
2. Set up the `upstream` remote just in case you need to update the fork
    ```bash
    git remote add upstream https://github.com/Supernova-Studio/exporter-android.git
    ```
3. Verify the upstream repository is correct. The command and example output is below:
    ```bash
    git remote -v
    ```
    **Output**
    ```bash
    origin  git@github.com:Acornsgrow/exporter-android.git (fetch)
    origin  git@github.com:Acornsgrow/exporter-android.git (push)
    upstream        https://github.com/Supernova-Studio/exporter-android.git (fetch)
    upstream        https://github.com/Supernova-Studio/exporter-android.git (push)
    ```
4. Checkout to `main` and make sure it's up-to-date
    ```bash
    git checkout main && git pull
    ```
5. Install all `npm` packages and build the JS
    ```bash
    npm install && npm run build
    ```
6. Open VS Code and install the Supernova extension
    - [Supernova Documentation](https://developers.supernova.io/latest/introduction-OZ286CLI) &rarr; Building Exporters 101 &rarr; [Overview](https://developers.supernova.io/latest/building-exporters/building-exporters-101/overview-eMkaO08W)
    - Install VS Code Supernova Extension &mdash; [VS Extension Store URL](https://marketplace.visualstudio.com/items?itemName=SupernovaIO.pulsar-vsc-extension) | [Install](vscode:extension/SupernovaIO.pulsar-vsc-extension)
7. Configure the extension
    1. In a web browser, login to [Supernova](https://cloud.supernova.io)
    2. Generate an API token
        1. Go to [Profile Settings](https://cloud.supernova.io/user-profile/general) in the top profile menu
        2. Go to the [Authentication](https://cloud.supernova.io/user-profile/authentication) tab
        3. Click on "Generate Token"
        4. Give the token a recognizable name (e.g. `Development Token`)
        5. Click "Confirm"
        6. Copy the generated Token value and store it in a secure place, such as a 1Password vault
        7. Once it is copied and stored securely, you can safely close the dialog
    3. Return to VS Code and open the Command Palette
    4. Run the following command and paste the API token you generated in the previous step and press `Enter` &#9166;
        ```
        > Supernova: Supernova Log In
        ```
    1. Open the Supernova Extension panel by clicking its icon in the leftside rail bar
    2. Click "Select design system"
    3. Follow the prompts and select the correct design system and brand.
8. Run the exporter by running the following command in the Command Palette, or by clicking the "&#9655;" in the Supernova Extension panel
    ```bash
    > Supernova: Run Exporter
    ```
9. Verify the exporter ran properly by checking the "Output" panel, and by inspecting the `.build` folder

## Reporting Bugs or Requesting Features

In order to faciliate easy communication and speed up delivery of fixes and features for this exporter, we require everyone to log all issues and feature requests through the issue tracking of this repository. 

Please read through the [existing issues](../../issues) before you open a new issue! It might be that we have already discussed it before. If you are sure your request wasn't mentioned just yet, proceed to [open a new issue](../../issues) and fill in the required information. Thank you!


## Contributing

If you have an idea for improving this exporter package or want a specific issue fixed quickly, we would love to see you contribute to its development!  

There are multiple ways you can contribute, so we have written a [contribution guide](https://developers.supernova.io/building-exporters/contribution-and-requests) that will walk your through the process. Any pull requests to this repository are very welcome. 

Would love to help us build more but maybe need a little bit of support? [Join our community](https://community.supernova.io) and drop us a message, we will support any of your wild ideas!


## License

This exporter is distributed under the [MIT license](./LICENSE.md). [We absolutely encourage you](https://developers.supernova.io/building-exporters/cloning-exporters) to clone it and modify it for your purposes, so it fits the requirements of your stack. If you see that you have created something amazing in the process that others would benefit from, we strongly recommend you consider [publishing it back to the community](https://developers.supernova.io/building-exporters/sharing-exporters-with-others) as well.

## Useful Links

- To learn more about Supernova, [go visit our website](https://supernova.io)
- To join our community of fellow developers where we try to push what is possible with design systems and code automation, join our [community discord](https://community.supernova.io)
- To understand everything you can do with Supernova and how much time and resources it can save you, go read our [product documentation](https://learn.supernova.io/)
- Finally, to learn everything about what exporters are and how you can integrate with your codebase, go read our [developer documentation](https://developers.supernova.io/)


## Supernova Maintained Exporters

We are developing and maintaining exporters for many major technologies. Here are all the official exporters maintained by Supernova:

- [iOS Token & Style Exporter](https://github.com/Supernova-Studio/exporter-ios)
- [iOS Localization Exporter](https://github.com/Supernova-Studio/exporter-ios-localization)
- [Android Token & Style Exporter](https://github.com/Supernova-Studio/exporter-android)
- [React Token & Style Exporter](https://github.com/Supernova-Studio/exporter-react)
- [Flutter Token & Style Exporter](https://github.com/Supernova-Studio/exporter-flutter)
- [Angular Token & Style Exporter](https://github.com/Supernova-Studio/exporter-angular)
- [Typescript Token & Style Exporter](https://github.com/Supernova-Studio/exporter-typescript)
- [CSS Token & Style Exporter](https://github.com/Supernova-Studio/exporter-css)
- [LESS Token & Style Exporter](https://github.com/Supernova-Studio/exporter-less)
- [SCSS Token & Style Exporter](https://github.com/Supernova-Studio/exporter-scss)
- [Style Dictionary Exporter](https://github.com/Supernova-Studio/exporter-style-dictionary)

Additionally, you can also use asset exporters for all major targets, enjoy!:

- [SVG Asset Exporter](https://github.com/Supernova-Studio/exporter-svg-assets)
- [PDF Asset Exporter](https://github.com/Supernova-Studio/exporter-pdf-assets)
- [PNG Asset Exporter](https://github.com/Supernova-Studio/exporter-png-assets)
- [iOS Asset Catalogue Exporter](https://github.com/Supernova-Studio/exporter-ios-asset-catalogue)
- [React Native Asset Exporter](https://github.com/Supernova-Studio/exporter-react-native-assets)
- [Android Asset Exporter](https://github.com/Supernova-Studio/exporter-android-assets)
- [Flutter PNG Asset Exporter](https://github.com/Supernova-Studio/exporter-flutter-png-assets)
- [Flutter SVG Asset Exporter](https://github.com/Supernova-Studio/exporter-flutter-svg-assets)

To browse all exporters created by our amazing community, please visit the [Supernova](https://supernova.io) Exporter Store. 
