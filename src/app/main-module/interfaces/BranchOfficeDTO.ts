import { AgreementTypeDTO } from "./AgreementTypeDTO";

export interface BranchOfficeDTO {
    id:               number;
    name:             string;
    sanctionable:     string;
    hash:             string;
    agreementTypeDTO: AgreementTypeDTO;
}
