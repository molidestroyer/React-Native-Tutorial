import axios from "axios";

export class Service {
    public static requestRandomData(page: number, seed: number) {
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;

        return fetch(url)
            .then(res => res.json())
            .then(res => {
                return res
            })
            .catch(error => {
                console.log("Error")
            });
    }
}