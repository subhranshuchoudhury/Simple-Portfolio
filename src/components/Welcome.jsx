import axios from "axios";
import { useState, useEffect } from "react";

const Welcome = () => {
  const [userInfo, setUserInfo] = useState([]);
  const greetingMessages = [
    "I hope you're doing well",
    "I hope you're having a wonderful day",
    "Happy “Not Monday”",
    "Hello from the other side",
  ];
  const fetchUserInfo = async () => {
    try {
      const { data } = await axios.get("http://ip-api.com/json/");
      setUserInfo(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <>
      <hr className="leftHrRed"></hr>
      <div className="greetingMessageContainer">
        {greetingMessages[parseInt(Math.random() * greetingMessages.length)]}.
      </div>
      <div className="greetingMessageHRU">
        How is <span className="cityName">{userInfo.city || "your city"}</span>{" "}
        ? Must be a great place !
      </div>
    </>
  );
};

export default Welcome;
