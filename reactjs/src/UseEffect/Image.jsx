import { useEffect, useState } from "react";

export default function Image() {
  const [avatar, setAvatar] = useState();
  useEffect(()=>{
    //cleanup
    return()=>(
        avatar&& URL.revokeObjectURL(avatar.preview)
    )
  },[avatar])
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };
  return (
    <div>
      <input type="file" name="" id="" onChange={handlePreviewAvatar} />
      {avatar&&(<img src={avatar.preview} width={"80%"}/>)}
    </div>
  );
}
