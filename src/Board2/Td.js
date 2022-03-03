import React from "react";

function Td({ item, handleRemove }) {
  const onRemove = () => {
    handleRemove(item.id);
  };
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.website}</td>
      <td className="cursor-pointer hover:scale-150">🧡</td>
      <td className="cursor-pointer hover:scale-150" onClick={onRemove}>
        💣
      </td>
    </tr>
  );
}

export default Td;
