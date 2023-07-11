import { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BackButton, BaseView, BtnFull, EmailField } from "../../components";

const PasswordReset = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleRecoverPassword = () => {
    navigation.navigate("PasswordReset2");
  };

  return (
    <BaseView>
      <View className="h-full w-full ">
        <BackButton />

        <View className="flex justify-center items-center w-full mt-7">
          <EmailField value={email} onChange={(text) => setEmail(text)} />
        </View>
        <BtnFull
          title="Recover Password"
          onPress={handleRecoverPassword}
          btnStyling={"mt-12"}
        />
      </View>
    </BaseView>
  );
};

export default PasswordReset;
