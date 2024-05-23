import {
  Pressable,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";

const HomeScreen = ({ navigation }) => {
  const [update, setUpdate] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [updateFirstname, setUpdateFirstname] = useState(userData?.firstname);
  const [updateLastname, setUpdateLastname] = useState(userData?.lastname);

  const [userData, setUserData] = useState({});
let userId = 52627266196371123
  const fetchUser = async () => {
    try {
      const response = await fetch(
        `https://reqres.in/api/users/${userId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse.user);
      setUserData(jsonResponse.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [isUpdated]);

  const handleSubmit = async () => {
    

    const userUpdatebody = JSON.stringify({
      firstname:updateFirstname,
      lastname:updateLastname,
    });
    try {
      await fetch(`https://reqres.in/api/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: userUpdatebody,
      }).then((res) => {
        Alert.alert("Update Successfull")
      setIsUpdated(true)
        setUpdate(false) 
      } );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View
      style={{
        padding: 50,
        display: "flex",
        flexDirection: "column",

        justifyContent: "center",
        minWidth: 900,
        minHeight: 1300,
        marginHorizontal: 300,
        gap: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 15,
          width: "100%",
          gap: 20,
        }}
      >
        <Text
          style={{
            display: "flex",
            width: "100%",
            backgroundColor: "#4b5263",
            height: 100,
            fontSize: 40,
            textAlign: "center",
            color: "white",
            paddingLeft: 200,
            paddingTop: 20,
            borderRadius: 20,
          }}
        >
          {update ? "Update Profile" : "Profile Details"}
        </Text>

        {update ? (
          <>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column",
                gap: 20,
                width: 500,
                height: 500,
              }}
            >
              <TextInput
                value={updateFirstname}
                defaultValue={updateFirstname} 
                onChangeText={(text) => setUpdateFirstname(text)}
                autoCorrect={false}
                autoCapitalize="none"
                style={{
                  height: 50,
                  paddingHorizontal: 15,
                  borderBottomColor: "black",
                  borderStyle: "solid",
                  color: "black",
                  fontSize: 20,
                }}
              />

              <TextInput
                value={updateLastname}
                defaultValue={updateLastname} 
                onChangeText={(text) => setUpdateLastname(text)}
                autoCorrect={false}
                autoCapitalize="none"
                style={{
                  height: 50,
                  paddingHorizontal: 15,
                  borderBottomColor: "black",
                  borderStyle: "solid",
                  color: "black",
                  fontSize: 20,
                  borderWidth: 5,
                }}
              />
            </View>

            <View
              style={{
                height: 50,
                paddingHorizontal: 15,
                borderBottomColor: "black",
                borderStyle: "solid",
                display: "flex",
                flexDirection: "column",
                borderWidth: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  borderWidth: 5,
                  textAlign: "center",
                  color: "gray",
                }}
              >
                Email: {userData.email}
              </Text>
            </View>

            <Pressable
              style={{
                backgroundColor: "gray",
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={handleSubmit}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 600,
                  textAlign: "center",
                }}
              >
                Update Profile
              </Text>
            </Pressable>
          </>
        ) : (
          <>
            <Image
              src={userData.avatar}
              width={200}
              height={200}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <View
              style={{
                width: "100%",
                gap: 7,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 30,
                  color: "gray",
                  fontWeight: "bold",
                }}
              >
                First Name: {userData?.firstname}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 30,
                  color: "gray",
                  fontWeight: "bold",
                }}
              >
                Last Name: {userData?.lastname}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "normal",
                  textAlign: "center",
                }}
              >
                Email: {userData?.email}
              </Text>
            </View>
          </>
        )}
        {!update && (
        <TouchableOpacity
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "75%",
            paddingHorizontal: 7,
            paddingVertical: 5,
          }}
          onPress={() => setUpdate(true)}
        >
          <Text
            style={{
              textAlign: "center",
              color: "black",
              fontWeight: "bold",
              fontSize: 20,
              borderBottomColor: "black",
              borderStyle: "solid",
              borderWidth: 4,

              width: 300,
              marginTop: 50,
              height: 70,
              paddingTop: 15,
            }}
          >
            
            Edit
          </Text>
        </TouchableOpacity>
        )} 
        
      </View>
    </View>
  );
};

export default HomeScreen;
