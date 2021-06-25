import { HttpClient } from "../httpClient/httpClient";

class CityService extends HttpClient {
    constructor() {
        super("https://api.openweathermap.org/data/2.5");
    }

    getCity(city: string) {
        return this.get(`weather?q=${city}&appid=2cbe784e47fc6c99e21c2fdcf902c075`);
    }

}

export const cityService = new CityService();