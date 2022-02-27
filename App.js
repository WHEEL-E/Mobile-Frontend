"use strict";
exports.__esModule = true;
var expo_status_bar_1 = require("expo-status-bar");
var react_1 = require("react");
var react_native_1 = require("react-native");
var Font = require("expo-font");
var react_redux_1 = require("react-redux");
var expo_app_loading_1 = require("expo-app-loading");
var fetchFonts = function () {
    return Font.loadAsync({
        "Cairo-Black": require("./fonts/Cairo-Black.ttf"),
        "Cairo-Bold": require("./fonts/Cairo-Bold.ttf"),
        "Cairo-ExtraBold": require("./fonts/Cairo-ExtraBold.ttf"),
        "Cairo-Light": require("./fonts/Cairo-Light.ttf"),
        "Cairo-Medium": require("./fonts/Cairo-Light.ttf"),
        "Cairo-Regular": require("./fonts/Cairo-Regular.ttf"),
        "Cairo-SemiBold": require("./fonts/Cairo-SemiBold.ttf")
    });
};
function App() {
    var _a = react_1.useState(false), fontLoaded = _a[0], setFontLoaded = _a[1];
    if (!fontLoaded) {
        return (<expo_app_loading_1["default"] 
        // @ts-ignore
        startAsync={fetchFonts} onFinish={function () { return setFontLoaded(true); }} onError={function (err) { return console.warn(err); }}/>);
    }
    return (<react_redux_1.Provider>
      <react_native_1.View style={styles.container}>
        <react_native_1.Text>Open up App.tsx to start working on your app!</react_native_1.Text>
        <expo_status_bar_1.StatusBar style="auto"/>
      </react_native_1.View>
    </react_redux_1.Provider>);
}
exports["default"] = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
