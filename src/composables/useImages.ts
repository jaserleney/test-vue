// Decidi crear los states [imagesGallery, userProfile] fuera del composable para tenerlos en un estado Global simulado por Vue, y la función para que el export no tenga peso extra.
import { ref } from "vue";
import type { Images } from "../interfaces/Images";
import picsumApi from "@/api/picsumApi";
import type { Users } from "../interfaces/Users";
import usersApi from "@/api/userApi";

const imagesGallery = ref<Images[]>([]);
const userProfile = ref<Users>();

const arrayPromises = [
  picsumApi.get<Images[]>("/list?page=4&limit=10"),
  usersApi.get<Users>("/?results=1"),
];

const getImages = async (): Promise<Images[] | Promise<Users> | any> => {
  try {
    const [{ data }, { data: user }] = await Promise.all(arrayPromises);
    imagesGallery.value = data as Images[];
    userProfile.value = user as Users;
  } catch (err) {
    console.log(err);
  }
};

getImages();

const useImages = () => {
  return {
    imagesGallery,
    userProfile,
  };
};

export default useImages;
