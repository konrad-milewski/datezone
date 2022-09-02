import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const Button = styled.a`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
  &:hover {
    color: white;
  }

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const Image = styled.img`
  width: 350px;
  height: 600px;
  margin: 30px;

  @media (max-width: 768px) {
    width: 175px;
    height: 300px;
  }
`;

export default function Container() {
  const [image, setImage] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/5")
      .then((response) => response.json())
      .then((data) => {
        setImage(data);
      });
  }, []);

  return (
    <div className="main-container">
      <h3>Aplikacja</h3>
      <div className="text-center">
        <Image src={image.url} />
      </div>

      <p>Wersja 3.11.4</p>
      <p>Data 22.07.2022</p>
      <p>
        is aliquam nunc tincidunt urna mollis dapibus. Mauris tincidunt metues
        risus nulla, a scelerisque lorem venenatis at.
      </p>
      <Button
        href="https://apkfab.com/datezone-oficjalna-aplikacja/com.app.datezone/download"
        primary
      >
        Pobierz aplikację Android
      </Button>
    </div>
  );
}
