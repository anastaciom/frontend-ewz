import React from "react";
import { UserCardStyle, UserAvatarStyle } from "./style";
export default function UsersCard({
  name,
  website,
  email,
  phone,
  street,
  city,
}) {
  return (
    <UserCardStyle>
      <UserAvatarStyle>
        <span />
        <div>
          <h1>{name}</h1>
          <h2>{website}</h2>
        </div>
      </UserAvatarStyle>
      <p>
        <strong>E-mail:</strong>
        {email}
      </p>
      <p>
        <strong>Telefone:</strong>
        {phone}
      </p>
      <p>
        <strong>Rua:</strong>
        {street}
      </p>
      <p>
        <strong>Cidade:</strong>
        {city}
      </p>
      <button>Ver mais</button>
    </UserCardStyle>
  );
}
