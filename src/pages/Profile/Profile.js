import React from "react";
import "./Profile.css";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import userico from "./user.png";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import edit from "./edit.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  
  const user = useSelector((state) => state.userReducer.user);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const admin = useSelector((state) => state.AdminReducer.admin);
  const isAuthAdmin = useSelector((state) => state.AdminReducer.isAuthAdmin);
  const navigate = useNavigate();
  const allowedAdminId = "6500ad79f959769b7043502a"; // ID autorisé à accéder au profil admin


  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PROFIL</title>
        <link rel="canonical" />
      </Helmet>

      <h1 className="Profile">PROFILE</h1>
      {isAuth ? (
        <div align="center" className="profileCard">
          <Card style={{ width: "20rem" }}>
            <Card.Img src={userico} />
            <Card.Body>
              <Card.Title>-Profile-</Card.Title>
              <Card.Text>
              {user._id === allowedAdminId ? <span className="forms">admin</span> : null}
              </Card.Text>


              <Card.Text>
                <span className="forms">Prénom :</span> {user && user.firstname}
              </Card.Text>

              <Card.Text>
                <span className="forms">Nom :</span> {user && user.name}
              </Card.Text>
              <Card.Text>
                <span className="forms">E-mail :</span> {user && user.email}
              </Card.Text>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">Modifier</Tooltip>}
              >
                {({ ref, ...triggerHandler }) => (
                  <a
                    {...triggerHandler}
                    ref={ref}
                    onClick={() => navigate(`/edit/${user._id}`)}
                  >
                    <img src={edit} className="editico" alt="edit" />
                  </a>
                )}
              </OverlayTrigger>

              <hr />
              <Card.Text>
                <span className="forms">Mot de passe </span>
              </Card.Text>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">Modifier</Tooltip>}
              >
                {({ ref, ...triggerHandler }) => (
                  <a
                    {...triggerHandler}
                    ref={ref}
                    onClick={() => navigate(`/Editpassword/${user._id}`)}
                  >
                    <img src={edit} className="editico" alt="edit" />
                  </a>
                )}
              </OverlayTrigger>
            </Card.Body>
          </Card>
        </div>
      ) : isAuthAdmin && admin ? (
        <div align="center" className="profileCard">
          <Card style={{ width: "20rem" }}>
            <Card.Img src={userico} />
            <Card.Body>
              <Card.Title>-Profil-</Card.Title>

              <Card.Text>
                <span className="forms">Prénom :</span>{" "}
                {admin && admin.firstname}
              </Card.Text>

              <Card.Text>
                <span className="forms">Nom :</span> {admin && admin.name}
              </Card.Text>
              <Card.Text>
                <span className="forms">E-mail :</span> {admin && admin.email}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
