import moment from "moment";

export function dateFormatter(data: string) {
    return moment(data).fromNow();
}