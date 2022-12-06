import { InvoiceDTO } from './InvoiceDTO';
import { BranchOfficeDTO } from './BranchOfficeDTO';
import { State } from './State';


export interface PaymentDTO {
    id:              number;
    paymentDate:     Date;
    paymentType:     string;
    paymentValue:    number;
    branchOfficeDTO: BranchOfficeDTO;
    invoiceDTO:      InvoiceDTO;
    statePaymentDTO: State;
}




