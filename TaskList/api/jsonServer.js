import axios from "axios";

// # TODO:
// terminalde ngrok http 3000 ile ngrok serverini acip guncellenen url'i buraya yaziyoruz.
// backend projesini vscode ile acip terminalinde de npm run db komutunu calistiriyoruz.
// daha sonra projemizi runliyoruz.
export default axios.create({
    // ngrok 300'den aldigimiz forwading url'sini buraya yaziyoruz.
    // daha sonrasinda bunu backendden veri cekmek icin, db olarak kullanacagiz.
    baseURL: "https://accd-78-177-139-25.ngrok-free.app/",
});
