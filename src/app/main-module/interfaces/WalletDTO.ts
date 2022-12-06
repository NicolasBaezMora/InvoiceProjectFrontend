import { ClientDTO } from "./ClientDTO";

export interface WalletDTO {
    id:        number;
    balance:   number;
    clientDTO: ClientDTO;
}