import axios from "axios";
import { atom, selector } from "recoil";


export const notifications = atom({
    key: "sel",
    default: selector({
        key: "notifications",
        get: async () => {
            const response = await axios.get("https://sum-server.100xdevs.com/notifications")
            return response.data;
        }
    })
})

export const allCountAtom = selector({
    key: "allCountAtom",
    get: ({get}) => {
        const allNotification = get(notifications);
        return allNotification.network + allNotification.jobs + allNotification.messaging + allNotification.notifications;
    }
})