import React from "react";
import styles from "./style.module.css";

// "d:/homework/4_Soft-Skills/2_Team_development/blessyou/front/src/static/image/Physiotherapist.png"

const doctorTable = [
  {
    id: 1,
    surname: "Иванов И.И.",
    profession: "Физиотерапевт",
  },
  {
    id: 2,
    surname: "Петрова А.А.",
    profession: "Педиатр",
  },
  {
    id: 3,
    surname: "Смирнов А.Б.",
    profession: "Гатроэнтеролог",
  },
  {
    id: 4,
    surname: "Сидорова Н.В.",
    profession: "Отоларинголог",
  },
  {
    id: 5,
    surname: "Иванов И.И.",
    profession: "Физиотерапевт",
  },
  {
    id: 6,
    surname: "Петрова А.А.",
    profession: "Педиатр",
  },
  {
    id: 7,
    surname: "Смирнов А.Б.",
    profession: "Гатроэнтеролог",
  },
  {
    id: 8,
    surname: "Сидорова Н.В.",
    profession: "Отоларинголог",
  },
];

export const Services = () => {
  return (
    <>
      <div className={styles.servicesHead}>
        <div className={styles.servicesContainer}>
          <h1>Наши врачи</h1>
        </div>
      </div>
      <div>
        <div className={styles.servicesContainer}>
          <div className={styles.doctorTable}>
            <h1>Команда высококлассных специалистов</h1>
            <div className={styles.doctorTableMain}>
              {doctorTable.map((card) => (
                <a href="#" className={styles.doctorCard}>
                  <div className={styles.doctorCardImg1}></div>
                  <div className={styles.doctorCardSurname}>{card.surname}</div>
                  <div className={styles.doctorCardProfession}>
                    {card.profession}
                  </div>
                </a>
              ))}

              {/* <a href="#" className={styles.doctorCard}>
                <img
                  src="../../static/image/physiotherapist.png"
                  alt="pho1to"
                  className={styles.doctorCardImg}
                />
                <div className={styles.doctorCardImg}></div>
                <div className={styles.doctorCardSurname}>Иванов И.И.</div>
                <div className={styles.doctorCardProfession}>Физиотерапевт</div>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.servicesMessage}>
        <div className={styles.servicesContainer}>
          <h1>Отправить сообщение</h1>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
    </>
  );
};
