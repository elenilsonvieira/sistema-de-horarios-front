import { CourseModel } from "./CourseModel";

export interface TurmaModel {
    uuid?:string;
    name: string;
    course_uuid?: string;
    courseModel?: CourseModel;
}