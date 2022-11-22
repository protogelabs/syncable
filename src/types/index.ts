export interface Class { //A class on the time table
    id: string;
    course_code: string;
    course_title: string;
    start_time: string;
    end_time: string;
    venue: string;
}

export interface User {// data will be stored on Firestore
    id: string;
    name: string;
    school_name: string;
}   