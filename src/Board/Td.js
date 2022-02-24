import React from "react";

function Td({ item, handleRemove }) {
  const onRemove = () => {
    handleRemove(item.id);
  };
  return (
    <tr>
      <td className="px-4 py-3">{item.id}</td>
      <td className="px-4 py-3">{item.name}</td>
      <td className="px-4 py-3">{item.email}</td>
      <td className="px-4 py-3">{item.phone}</td>
      <td className="px-4 py-3">{item.website}</td>
      <td className="cursor-pointer text-2xl">🖋</td>
      <td onClick={onRemove} className="cursor-pointer text-2xl">
        🗑
      </td>
    </tr>
  );
}

export default Td;
