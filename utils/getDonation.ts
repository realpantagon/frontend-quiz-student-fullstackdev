import { Donation } from "./types";
import { API_URL } from "./api";

export default async function getDonation(msg: string): Promise<Donation> {
  console.log(`Get Donation from ${msg}`);
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
}
