import axios from "axios";


const apiMagicUrl = "https://api.magicthegathering.io/v1/cards"

const getMagics = async () => {
    const response = await axios.get(apiMagicUrl);
    console.log(response)
  return response.data.cards;
};
export { getMagics };