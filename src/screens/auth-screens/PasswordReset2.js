import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { BaseView, BtnFull, PasswordField } from "../../components";
// import { resetPassword } from '../reducers/authSlice';

const PasswordReset2 = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleDone = () => {
    if (newPassword === confirmPassword) {
      // dispatch(resetPassword({'password': newPassword}));
      navigation.navigate("Home"); // Replace 'Home' with the name of your home screen
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <BaseView>
      <View className="flex justify-center items-center mt-3 w-full">
        <PasswordField
          value={confirmPassword}
          placeholder="New Password"
          onChange={(text) => setConfirmPassword(text)}
        />
        <PasswordField
          value={newPassword}
          placeholder="Re-enter new password"
          onChange={(text) => setNewPassword(text)}
        />
        {error ? <Text>{error}</Text> : null}
      </View>

      <BtnFull title={"Done"} onPress={handleDone} btnStyling={"mt-14"} />
    </BaseView>
  );
};

export default PasswordReset2;
