export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
};

export interface Directors extends Teacher {
    numberOfReports: number;
};

export interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
};

export const printTeacher: PrintTeacherFunction = (firstName, lastName)=> {
    return `${firstName.charAt(0)}. ${lastName}`;
};