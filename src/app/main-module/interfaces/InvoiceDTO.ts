import { State } from "./State";
import { WalletDTO } from "./WalletDTO";

export interface InvoiceDTO {
    id:            number;
    invoicedValue: number;
    invoicedDate:  Date;
    walletDTO:     WalletDTO;
    stateInvoice:  State;
}