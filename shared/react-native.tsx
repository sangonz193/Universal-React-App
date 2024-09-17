// Most of the code is from https://github.com/nativewind/nativewind/blob/a017832f38fe5ce46dfb4f97b1daec1d44bd0955/packages/react-native-css-interop/src/runtime/components.ts.
// Not sure why, components defined in this package that import from "react-native" are not styled in the Tauri app.
// For that reason, components in this package need to import React Native components from here instead.

import * as RN from "react-native";
import { cssInterop, remapProps } from "nativewind";

export const Image = cssInterop(RN.Image, { className: "style" });
export const Pressable = cssInterop(RN.Pressable, { className: "style" });
export const SafeAreaView = cssInterop(RN.SafeAreaView, { className: "style" });
export const Switch = cssInterop(RN.Switch, { className: "style" });
export const Text = cssInterop(RN.Text, { className: "style" });
export const TouchableHighlight = cssInterop(RN.TouchableHighlight, {
  className: "style",
});
export const TouchableOpacity = cssInterop(RN.TouchableOpacity, {
  className: "style",
});
export const TouchableWithoutFeedback = cssInterop(
  RN.TouchableWithoutFeedback,
  { className: "style" }
);
export const View = cssInterop(RN.View, { className: "style" });
export const ActivityIndicator = cssInterop(RN.ActivityIndicator, {
  className: { target: "style", nativeStyleToProp: { color: true } },
});
export const StatusBar = cssInterop(RN.StatusBar, {
  className: { target: false, nativeStyleToProp: { backgroundColor: true } },
});
export const ScrollView = cssInterop(RN.ScrollView, {
  className: "style",
  contentContainerClassName: "contentContainerStyle",
  indicatorClassName: "indicatorStyle",
});
export const TextInput = cssInterop(RN.TextInput, {
  className: { target: "style", nativeStyleToProp: { textAlign: true } },
});

export const FlatList = remapProps(RN.FlatList, {
  className: "style",
  ListFooterComponentClassName: "ListFooterComponentStyle",
  ListHeaderComponentClassName: "ListHeaderComponentStyle",
  columnWrapperClassName: "columnWrapperStyle",
  contentContainerClassName: "contentContainerStyle",
  indicatorClassName: "indicatorStyle",
});
export const ImageBackground = remapProps(RN.ImageBackground, {
  className: "style",
  imageClassName: "imageStyle",
});
export const KeyboardAvoidingView = remapProps(RN.KeyboardAvoidingView, {
  className: "style",
  contentContainerClassName: "contentContainerStyle",
});
export const VirtualizedList = remapProps(RN.VirtualizedList, {
  className: "style",
  ListFooterComponentClassName: "ListFooterComponentStyle",
  ListHeaderComponentClassName: "ListHeaderComponentStyle",
  contentContainerClassName: "contentContainerStyle",
  indicatorClassName: "indicatorStyle",
});
