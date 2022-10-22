import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function SideCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button size="sm" style={{ backgroundColor: "white", color: "black", borderColor: "black"}} variant="primary" onClick={handleShow}>
        <MenuRoundedIcon/> Категории
      </Button>

      <Offcanvas style={{ zIndex: "1100"}} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Категории</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>
             <Link>Телефони</Link>
             <ul>
              <li>
              <Link>Samsung</Link>
              </li>
             </ul>
            </li>
            <li>
             <Link>Телевизори</Link>
            </li>
            <li>
             <Link>Бяла техника</Link>
            </li>
            <li>
            <Link>Сапун</Link>
            </li>
            <li>
            <Link>Телефони</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
