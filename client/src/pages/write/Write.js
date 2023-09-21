/** @format */

import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

const URL = "http://localhost:5000";

export default function Write() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [file, setfile] = useState(null);
  const { user } = useContext(Context);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const baipostmoi = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const dulieu = new FormData();
      const tenfile = Date.now() + file.name;
      dulieu.append("name", tenfile);
      dulieu.append("file", file);
      baipostmoi.photo = tenfile;
      try {
        await axios.post(`${URL}/upload`, dulieu);
      } catch (err) {}
    }
    try {
      const res = await axios.post(`${URL}/posts`, baipostmoi);
      window.location.replace("/post/" + res.dulieu._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeimg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeform" onSubmit={handlesubmit}>
        <div className="writeformgroup">
          <label htmlFor="fileinput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setfile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setdesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
