import { Button, TextField } from "@mui/material";
import "./ProfilePage.scss";
import ProfileAvatar from "../../components/profileAvatar/ProfileAvatar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeUserName, pushToLocalStorage, changeUserPhone, changeUserAddress1, changeUserAddress2, changeUserManipulacity ,changeUserTown } from "../../store/activeUserSlice";

export default function ProfilePage() {
  const users = useSelector((state) => state.activeUser.users);
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  let activeUser = users.find((e) => e.username === loggedUser);
  const dispatch = useDispatch();

  const [name, setName] = useState(activeUser.name);
  const [phone, setPhone] = useState(activeUser.phone);
  const [phoneError, setPhoneError] = useState(false);
  const [manipulacity,setManipulacity] = useState(activeUser.address.manipulacity);
  const [city,setCity] = useState(activeUser.address.city);
  const [address1,setAddress1] = useState(activeUser.address.address1);
  const [address2,setAddress2] = useState(activeUser.address.address2);
  const [saveLoader,setSaveLoader] = useState(false)

  useEffect(() => {
    dispatch(changeUserName({ loggedUser, name }));
    dispatch(changeUserPhone({ loggedUser, phone }));
    dispatch(changeUserTown({ loggedUser, city }));
    dispatch(changeUserAddress1({ loggedUser, address1 }));
    dispatch(changeUserAddress2({ loggedUser, address2 }));
    dispatch(changeUserManipulacity({ loggedUser, manipulacity }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, phone, city, manipulacity, address1, address2]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleManipulacityChange = (e) => {
    setManipulacity(e.target.value);
  };

  const handleAddress1Change = (e) => {
    setAddress1(e.target.value);
  };

  const handleAddress2Change = (e) => {
    setAddress2(e.target.value);
  }


  useEffect(() => {
    let input = phone;
    if (input.length === 10) {
      setPhoneError(false);
      
    } else {
      setPhoneError(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[activeUser.phone])

// const saveChanges = () => {
//   let id = setTimeout(() => {setSaveLoader(true)},500);
//   setSaveLoader(false)
//   clearTimeout(id);
//   dispatch(pushToLocalStorage())
//   dobavi na buttona -- onClick={() => saveChanges}
// }

  return (
    <>
      <div className="profilePageContainer">
        <div className="profileInfoContainer">
          <div className="userInfo">
            <h3>{`Здравейте, ${activeUser.name}!`}</h3>
            <ProfileAvatar
              sx={{
                bgcolor: "orange",
                width: 240,
                height: 240,
                marginLeft: 15,
                fontSize: "120px",
              }}
            />
            <TextField
              variant="standard"
              size="small"
              id={"username"}
              width="true"
              disabled
              value={activeUser.username}
              type={"text"}
              label={"Потребителско име"}
            />
            <TextField
              variant="standard"
              size="small"
              id={"name"}
              width="true"
              value={name}
              onInput={handleNameChange}
              type={"text"}
              label={"Име и Фамилия"}
            />
            <TextField
              variant="standard"
              type={"number"}
              error={phoneError}
              size="small"
              id={"phone"}
              width="true"
              value={phone}
              onInput={handlePhoneChange}
              label={"Телефон"}
            />
          </div>
          <div className="adressInfo">
            <h3>Адрес за доставка:</h3>
            <TextField
              variant="standard"
              id={"country"}
              disabled
              width="true"
              value={"България"}
              type={"text"}
              label={"Държава"}
            />
            <TextField
              variant="standard"
              id={"manipulacity"}
              width="true"
              value={manipulacity}
              onInput={handleManipulacityChange}
              type={"text"}
              label={"Област"}
            />
            <TextField
              variant="standard"
              id={"city"}
              width="true"
               value={city}
              onInput={handleCityChange}
              type={"text"}
              label={"Град"}
            />
            <TextField
              variant="standard"
              id={"address1"}
              width="true"
              value={address1}
              onInput={handleAddress1Change}
              type={"text"}
              label={"Адрес 1"}
            />
            <TextField
              variant="standard"
              id={"address2"}
              width="true"
              value={address2}
              onInput={handleAddress2Change}
              type={"text"}
              label={"Адрес 2"}
            />
            <Button size={'small'} sx={{color: "black"}}>Запази промените</Button>
          </div>
        </div>
      </div>
    </>
  );
}
