export function stringInitial(nome: string): string {
    if (nome && nome.trim() !== "") {
        return nome.trim()[0].toUpperCase();
    }
    return "";
}

export function generateColor(nome: string): string {
    // Função para converter uma string em um número
    const stringParaNumero = (str: string): number => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return hash;
    };

    // Função para gerar uma cor hexadecimal a partir de um número
    const gerarCorHex = (numero: number): string => {
        const corHex = (numero & 0x00FFFFFF).toString(16).toUpperCase();
        return "00000".substring(0, 6 - corHex.length) + corHex;
    };

    // Gerar número a partir do nome
    const numero = stringParaNumero(nome);

    // Gerar cor hexadecimal a partir do número
    const corHex = gerarCorHex(numero);

    return `#${corHex}`;
}