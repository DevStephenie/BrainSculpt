import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import FastImage from "react-native-fast-image";
import { LoginForm, BaseView, BtnFull, TextLink } from "../../components";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <BaseView>
      <View className="flex flex-col justify-between items-center mt-2  mb-5 w-full h-full pb-10">
        <View className="flex justify-center items-center w-full">
          <Image
            style={{ width: "80%", height: 80 }}
            source={require("../../assets/logo.png")}
            resizeMode={"contain"}
          />
        </View>

        <LoginForm />

        <View className="flex flex-col justify-between items-center w-full mb-2">
          <TextLink
            title={"Forgot your password?"}
            onPress={() => navigation.navigate("PasswordReset")}
            btnStyling={"mb-7"}
          />

          <View className="flex justify-center items-center bg-[#dddddd] w-full h-[1px] rounded-full">
            <Text className="flex justify-center items-center w-10 h-5 rounded-full bg-base-white text-center text-md text-blue">
              Or
            </Text>
          </View>
        </View>

        <View className="flex justify-center items-center w-full">
          <BtnFull
            title={"Login in with Facebook"}
            onPress={() => console.log("handleFacebookLogin")}
            btnStyling={"my-2"}
          />
          <BtnFull
            title={"Login in with Apple"}
            onPress={() => console.log("handleFacebookLogin")}
          />
        </View>

        <TextLink
          title={"Don't have an account? Sign up"}
          onPress={() => navigation.navigate("Signup")}
          btnStyling={"my-3"}
        />
      </View>
    </BaseView>
  );
};

export default LoginScreen;
