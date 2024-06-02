export type Appointment = {
    id: number;
    date: string;
    time: string;
    status: boolean;
    userId: number;
    clinicBranchId: number;
    appointmentTypeId: number;
    clinicBranch: {
        id: number;
        name: string;
    };
    appointmentType: {
        id: number;
        name: string;
    };
    user: {
        id: number;
        name: string;
    };
};
