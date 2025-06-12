import axios from "axios";

export const refreshAccessToken = async (): Promise<string> => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/refresh-token`,
    {},
    { withCredentials: true }
  );
  return res.data.access_token;
};
