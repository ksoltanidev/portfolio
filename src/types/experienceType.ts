import {ReactNode} from "react";

export type experienceType = {
    date: string,
    title: string,
    location?: string,
    description?: string | ReactNode,
    tags?: string,
}