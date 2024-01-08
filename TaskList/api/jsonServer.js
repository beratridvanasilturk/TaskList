import axios from "axios";

export default axios.create({
    // ngrok 300'den aldigimiz forwading url'sini buraya yaziyoruz.
    // daha sonrasinda bunu backendden veri cekmek icin, db olarak kullanacagiz.
    baseURL: "https://7400-78-177-139-25.ngrok-free.app/",
    });
