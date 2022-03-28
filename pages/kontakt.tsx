import React from "react";

interface Props {}

const email = "agolinska.dietetyczka@gmail.com";

const kontakt: React.FC<Props> = () => {
  return (
    <div>
      <p>Telefonik: +48 534 480 540</p>
      <p>
        Emajl: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  );
};

export default kontakt;
