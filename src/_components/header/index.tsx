import { FC } from "react";
import Image from "next/image";
import Logo from "../../../public/international-departures-svgrepo-com.svg";
import Phone from "../../../public/phone.svg";
import WhatsApp from "../../../public/whatsapp.svg";
import Booking from "../../../public/booking.svg";
import styles from "./style.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Image src={Logo} alt="Logo in header" width={30} height={30} />
      <div>
        <ul className={styles.header_contact_list}>
          <li className={styles.alignment_item}>
            <Image src={Phone} alt="Phone logo" />
            <a href="">0203 333 7777</a>
          </li>
          <li className={styles.alignment_item}>
            <Image src={WhatsApp} alt="Whatsapp logo" />
            <a href="">0786 775 1813</a>
          </li>
        </ul>
      </div>
      <div className={styles.alignment_item}>
        <Image src={Booking} alt="Whatsapp logo" />
        <a href="">Manage Bookings</a>
      </div>
    </header>
  );
};
