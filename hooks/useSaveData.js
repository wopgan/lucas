import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

const useSaveData = () => {
  const router = useRouter();

  const handleSaveData = (path, key, data) => {
    const id = uuidv4();
    if (!localStorage.getItem("id")) {
      localStorage.setItem("id", JSON.stringify(id));
    }
    if (key && data) {
      localStorage.setItem(key, JSON.stringify(data));
    }

    localStorage.setItem("previous-page", router.pathname);

    router.push(path);
  };
  return { handleSaveData };
};

export default useSaveData;
