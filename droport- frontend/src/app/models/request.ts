import { Time } from "@angular/common";

export interface Request {
     req_id: number, 
     district: string,
     town: string,
     area: string,
     date: Date,
     time: Time,
     cus_id: number,
     map_area:any
     start_time:Time
     end_time:Time
     total_fly_time:Time
     quality_category:string
     max_flight_time:string
    }
