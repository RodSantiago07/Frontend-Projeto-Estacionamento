export class Cliente {
    id!: number;
    marcadocarro!: string;
    modelodocarro!: string;
    placadocarro!: string;
    dataDeEntrada!: Date;
    valorTotal!: DoubleRange;
    dataDeSaida!: Date;

}

export class ClienteSaida {
    id!: number;
    marcadocarro!: string;
    modelodocarro!: string;
    placadocarro!: string;
    valorTotal!: DoubleRange;
}

