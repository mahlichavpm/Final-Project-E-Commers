import { TextField } from "@mui/material";
import "./ProfilePage.scss";
import ProfileAvatar from "../../components/profileAvatar/ProfileAvatar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeUserName, changeUserPhone } from "../../store/activeUserSlice";

export default function ProfilePage() {
  const users = useSelector((state) => state.activeUser.users);
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  let activeUser = users.find((e) => e.username === loggedUser);
  const dispatch = useDispatch();

  const [name, setName] = useState(activeUser.name);
  const [phone, setPhone] = useState(activeUser.phone);
  const [phoneError, setPhoneError] = useState(false);

  useEffect(() => {
    dispatch(changeUserName({ loggedUser, name }));
    dispatch(changeUserPhone({ loggedUser, phone }));
  }, [name, phone]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    // let input = phone;
    // if (input.length === 10) {
    //   setPhoneError(false);
    // } else {
    //   setPhoneError(true);
    // }
  };

  useEffect(() => {
    let input = phone;
    if (input.length === 10) {
      setPhoneError(false);
      
    } else {
      setPhoneError(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[activeUser.phone])

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
              width="true"
              value={"България"}
              type={"text"}
              label={"Държава"}
            />
            <TextField
              variant="standard"
              id={"manipulacity"}
              width="true"
              value={"Бургас"}
              type={"text"}
              label={"Област"}
            />
            <TextField
              variant="standard"
              id={"city"}
              width="true"
              value={"Поморие"}
              type={"text"}
              label={"Град"}
            />
            <TextField
              variant="standard"
              id={"address1"}
              width="true"
              value={"кв.Свобода"}
              type={"text"}
              label={"Адрес 1"}
            />
            <TextField
              variant="standard"
              id={"address2"}
              width="true"
              value={"бл.16 вх.А ет.3"}
              type={"text"}
              label={"Адрес 2"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
