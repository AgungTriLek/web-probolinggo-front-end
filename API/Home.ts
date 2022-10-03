import axios from "axios";
import { AllArticleTypes, AllKecamatan, AllPengumuman } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function AllArtikle() {
  const URL = "contents/landingpage";

  const axio = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const response = axio.data;
  const filteringData = response.data.filter(
    (e: { category: string }) => e.category !== "Pengumuman"
  );
  return filteringData;
}
export async function Pengumuman() {
  const URL = "contents/contentpengumuman";

  const axio = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const response = axio.data;
  const reverseData = response.data.reverse();
  return reverseData;
}

export async function Informasi(categ: any) {
  const URL = `contents/contentinformasi`;

  const axio = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const response = axio.data;
  const reverseData = response.data.reverse();
  const filteringData = reverseData.filter((e: AllArticleTypes) => e.category.name === `${categ}`);
  return filteringData;
}

export async function Kecamatan(cat:any) {
  const URL = "contents/contentkecamatan";

  const axio = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const response = axio.data;
  const reverseData = response.data.reverse();
  const filteringData = reverseData.filter((e: AllArticleTypes) => e.category.name === `${cat}`);
  return filteringData;
}

export async function DetailKecamatan(id:string) {
  const URL = "contents/contentkecamatan";

  const axio = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const response = axio.data;
  const findData = response.data.filter((e: AllKecamatan) => e._id === `${id}`);
  return findData;
}

export async function CategoryInformasi() {
  const URL = "contents/categoryinformasi";

  const axio = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const response = axio.data;
  return response;
}

export async function DetailArticle(id: any) {
  const URL = `contents/contentinformasi`;

  const axio = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const response = axio.data;
  const filteringData = response.data.filter((e: AllArticleTypes) => e._id === id);
  return filteringData;
}

export async function Akuntabilitas(cat:any) {
  const URL = "contents/contentakuntabilitas";

  const axio = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const response = axio.data;
  const findData = response.data.filter((e: AllKecamatan) => e.category.name === `${cat}`);
  return findData;
}

export async function DetailAkuntabilitas(id:string) {
  const URL = "contents/contentakuntabilitas";

  const axio = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const response = axio.data;
  const findData = response.data.filter((e: AllKecamatan) => e._id === `${id}`);
  return findData;
}