import React, { FC } from "react";
import { Button, Image, View } from "react-native";
import OnboardingSwiper from "react-native-onboarding-swiper";

interface DotsComponentProps {
  selected: boolean;
}

interface OnboardingScreenProps {
  navigation: {
    navigate: (screen: string, params?: object) => void;
    replace: (screen: string, params?: object) => void;
  };
}

const DotsComponent = ({ selected }: DotsComponentProps) => {
  let backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";

  return (
    <View
      style={{ width: 5, height: 5, marginHorizontal: 3, backgroundColor }}
    />
  );
};

const NextButton = ({ ...props }) => {
  return <Button title="Next" color="#000" {...props} />;
};

const DoneButton = ({ ...props }) => {
  return <Button title="Done" color="#000" {...props} />;
};

const OnboardingScreen: FC<OnboardingScreenProps> = ({ navigation }) => {
  return (
    <OnboardingSwiper
      NextButtonComponent={NextButton}
      DoneButtonComponent={DoneButton}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      DotComponent={DotsComponent}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../../assets/onboarding-img1.png")} />,
          title: "Connect to World",
          subtitle: "A New Way To Connecy With The World",
        },
        {
          backgroundColor: "#fdeb93",
          image: <Image source={require("../../assets/onboarding-img2.png")} />,
          title: "Share Your Favorites",
          subtitle: "Share Your Thoughts With Similar Kind of People",
        },
        {
          backgroundColor: "#e9bcbe",
          image: <Image source={require("../../assets/onboarding-img3.png")} />,
          title: "Become The Star",
          subtitle: "Let The Spot Light Capture You",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
