import { View, Text } from "react-native";
import { useState } from "react";
import { BaseView, BtnFull, TopBar, Loader } from "../../components";

const BalancersEntry = () => {
  return (
    <>
      <TopBar title="connect" noBack={true}/>
      <BaseView>
        <NotConnected />
      </BaseView>
    </>
  );
};

export const NotConnected = () => {
  const [deviceState, setDeviceState] = useState("scanning");

  let stateRender = "";

  switch (deviceState) {
    case "scanning":
      stateRender = "attempting to connect";
      break;

    case "not-found":
      stateRender = "Device not found";
      break;

    case "found":
      stateRender = "Device connected";
      break;

    default:
      break;
  }
  return (
    <View className="w-full flex items-center justify-center">
      <BtnFull
        title={"please confirm device is ON"}
        btnStyling={"bg-white shadow-sm my-3 py-6 "}
        textStyling={"text-[#333]"}
      />

      <View className="flex items-center justify-center p-4">
        <Loader playing={true} />
        <Text className="text-xs font-seminbold text-[#333] my-3">
          {stateRender}
        </Text>
      </View>

      <BtnFull
        title={"keep searching"}
        btnStyling={"bg-white shadow-sm my-3 w-2/3 py-6 "}
        textStyling={"text-[#333]"}
      />
      <BtnFull
        title={"Open Device Manager"}
        btnStyling={"shadow-sm w-2/3 py-6 "}
      />
    </View>
  );
};

export default BalancersEntry;
