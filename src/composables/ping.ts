import { ref } from "vue";
import { client } from "../client";

export const usePing = async (url: string, type: "frontend" | "api" | "bot", onFetch?: () => void) => {
    let parsedUrl = type === "api" ? url + "/ping" : url;

    const status = ref("loading");

    try {
        const response = await client(parsedUrl).get(url)
        status.value = "success";
    }
    catch(error) {
        status.value = "error";
    }
    finally {
        onFetch?.();
    }
 
    return status;
}