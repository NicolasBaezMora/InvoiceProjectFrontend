import { BranchOfficeDTO } from "./BranchOfficeDTO";

export interface CommissionDTO {
    id:                     number;
    value:                  number;
    dateGen:                Date;
    dateEndCalculation:     Date;
    dateInitialCalculation: Date;
    branchOfficeDTO:        BranchOfficeDTO;
}
