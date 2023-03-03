import { service_http } from "../http/http-services";
import { IResultMovie } from "../interfaces/interface";

export class Movie {
    urlMovies = "https://api.themoviedb.org/3/movie/";
    tokenMovies = "?api_key=652e21c327dfa0a8eb13e936681f064e";
    lenguajeMovies = "&language=en-ES"
    path = "now_playing"
    pageuri="&page="
    async getone(id:number=9):Promise<IResultMovie>{
        return await service_http<IResultMovie>(`${this.urlMovies}${id}${this.tokenMovies}${this.lenguajeMovies}`);
    }
    async getAll(page=null):Promise<IResultMovie>{
        return await service_http<IResultMovie>(`${this.urlMovies}${this.path}${this.tokenMovies}${this.lenguajeMovies}${this.pageuri}${page}`);
    }
    // async getImage():Promise<IResultMovie[]>{
    //     return await ser
    // }
}


