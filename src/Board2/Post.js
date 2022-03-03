import React, { useEffect, useState } from "react";

function Post({ onSaveData }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveData(form);
    setForm({ name: "", email: "", phone: "", website: "" });
  };

  return (
    <div>
      <div className="text-2xl font-extrabold mt-3 mb-5">고객 추가하기</div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row">
          <label htmlFor="name">NAME</label>
          <input
            onChange={handleChange}
            className="border-2"
            id="name"
            value={form.name}
            placeholder="이름을 입력하세요"
            type="text"
            required0
          ></input>
          <label htmlFor="email">EMAIL</label>
          <input
            onChange={handleChange}
            className="border-2"
            id="email"
            value={form.email}
            placeholder="이메일을 입력하세요"
            type="email"
            required
          ></input>
          <label htmlFor="phone">PHONE</label>
          <input
            onChange={handleChange}
            className="border-2"
            id="phone"
            value={form.phone}
            placeholder="전화번호를 입력하세요"
            type="tel"
            required
          ></input>
          <label htmlFor="website">WEBSITE</label>
          <input
            onChange={handleChange}
            className="border-2"
            id="website"
            value={form.website}
            placeholder="사이트를 입력하세요"
            type="url"
            required
          ></input>
        </div>

        <button
          className="p-3 bg-blue-500 rounded-lg mt-3 w-full text-white font-extrabold text-lg"
          type="submit"
        >
          저장
        </button>
      </form>
    </div>
  );
}

export default Post;
