# VR Frontend
This folder was created in order to facilitate the transition out of expo

## Dependencies
After many days of trial and error, we have found a list of dependencies that allow usage of viro-react. It can be found [here](./package_SAFE.json). This file may not contain the full list of dependencies, but it at least contains that which is working. Another thing to note is that should you want to replicate this project, you cannot just start by taking our package.json. That is because the open source viro package does not support auto linking. In fact, it is a tedious process that I could not make work. For our own project we started by using the [Starter Kit Repo](https://github.com/ViroCommunity/starter-kit) provided by the viro-community.

## iOS
This has not yet been tested on iOS. Nor we intend to for this orbital project. However, we may choose to do so in the longer term.

## onExitViro Callback
This did not work out-of-box. In order to allow this to work, you have to add this line to your dependencies in vrfrontend/android/app/build.gradle file:  
`implementation 'androidx.localbroadcastmanager:localbroadcastmanager:1.0.0'`  
This is not found in the default starter kit repo at this time of writing