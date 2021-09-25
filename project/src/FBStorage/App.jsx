import { useEffect, useState } from "react";
import { get, send } from "./db";
import { getImg, getMeta, upload } from "./stor";

export const App = () => {
  const [url, setUrl] = useState(null);
  const [meta, setMeta] = useState(null);
  useEffect(() => {
    getImg().then((url) => setUrl(url));
    getMeta().then((url) => setMeta(url));
  }, []);
  return (
    <dix>
      <input type="file" onChange={(e) => upload(e.target.files[0])} />
      <img src={url} style={{ width: 400, height: 400 }} />
      <button onClick={send}>send</button>
      <button onClick={get}>get</button>
    </dix>
  );
};
