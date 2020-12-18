// 
// Mock data
//

// payment methods from ifood.com.br
export const paymentmethods = [
    {
        "recommendations": [
            { "option": { "key": "DINHEIRO", "value": "DIN" }, "active": false, "readOnly": false },
            { "option": { "key": "DÉBITO - MASTERCARD (MÁQUINA)", "value": "MEREST" }, "active": true, "readOnly": false },
            { "option": { "key": "CRÉDITO - MASTERCARD (MÁQUINA)", "value": "RDREST" }, "active": false, "readOnly": false },
            { "option": { "key": "DÉBITO - ELO (MÁQUINA)", "value": "RED" }, "active": true, "readOnly": false },
            { "option": { "key": "DÉBITO - VISA (MÁQUINA)", "value": "VIREST" }, "active": true, "readOnly": false }
        ],
        "cards": [
            { "option": { "key": "CRÉDITO - AMERICAN EXPRESS (MÁQUINA)", "value": "RAM" }, "active": true, "readOnly": false },
            { "option": { "key": "CRÉDITO - ELO (MÁQUINA)", "value": "REC" }, "active": true, "readOnly": false },
            { "option": { "key": "CRÉDITO - DINERS (MÁQUINA)", "value": "DNREST" }, "active": true, "readOnly": false },
            { "option": { "key": "CRÉDITO - VISA (MÁQUINA)", "value": "VSREST" }, "active": true, "readOnly": false },
            { "option": { "key": "CRÉDITO - NUGO (MÁQUINA)", "value": "NUGO" }, "active": false, "readOnly": false },
            { "option": { "key": "DÉBITO - BANRICOMPRAS (MÁQUINA)", "value": "BANRD" }, "active": false, "readOnly": false },
            { "option": { "key": "CRÉDITO - BANRICOMPRAS (MÁQUINA)", "value": "BANRC" }, "active": false, "readOnly": false },
            { "option": { "key": "CRÉDITO - HIPERCARD (MÁQUINA)", "value": "RHIP" }, "active": false, "readOnly": false },
            { "option": { "key": "CRÉDITO - VERDECARD (MÁQUINA)", "value": "VERDEC" }, "active": false, "readOnly": false },
            { "option": { "key": "CRÉDITO - GOODCARD (MÁQUINA)", "value": "GOODC" }, "active": false, "readOnly": false }
        ],
        "vouchers": [
            { "option": { "key": "BEN VISA REFEIÇÃO", "value": "BENVVR" }, "active": true, "readOnly": false },
            { "option": { "key": "VALE - ALELO REFEIÇÃO / VISA VALE (CARTÃO)", "value": "VVREST" }, "active": true, "readOnly": false },
            { "option": { "key": "VALE - REFEISUL (CARTÃO)", "value": "RSELE" }, "active": false, "readOnly": false },
            { "option": { "key": "VALE - VALE CARD", "value": "VALECA" }, "active": false, "readOnly": false },
            { "option": { "key": "VISA REFEIÇÃO", "value": "VISAVR" }, "active": false, "readOnly": false },
            { "option": { "key": "VALE - TICKET RESTAURANTE (CARTÃO)", "value": "TRE" }, "active": false, "readOnly": false },
            { "option": { "key": "VALE - GREEN CARD (PAPEL)", "value": "GRNCPL" }, "active": false, "readOnly": false },
            { "option": { "key": "VALE - SODEXO (CARTÃO)", "value": "RSODEX" }, "active": false, "readOnly": false },
            { "option": { "key": "VALE - VEROCARD (CARTÃO)", "value": "TVER" }, "active": false, "readOnly": false },
            { "option": { "key": "VALE - VR SMART (CARTÃO)", "value": "VR_SMA" }, "active": false, "readOnly": false },
            { "option": { "key": "VALE - GREEN CARD (CARTÃO)", "value": "GRNCAR" }, "active": false, "readOnly": false },
            { "option": { "key": "VALE - COOPER CARD (CARTÃO)", "value": "CPRCAR" }, "active": false, "readOnly": false },
            { "option": { "key": "NUTRICARD REFEICÃO E ALIMENTAÇÃO", "value": "NUTCRD" }, "active": false, "readOnly": false }
        ],
        "others": [
            { "option": { "key": "CHEQUE", "value": "CHE" }, "active": false, "readOnly": false }
        ],
        "vouchersOnline": [
            { "option": { "key": "VR ONLINE", "value": "VRO" }, "active": true, "readOnly": false },
            { "option": { "key": "ALELO ONLINE", "value": "ALR" }, "active": true, "readOnly": false }
        ],
        "creditOffline": [
            { "option": { "key": "CRÉDITO - AMERICAN EXPRESS (MÁQUINA)", "value": "RAM" }, "active": true, "readOnly": false },
            { "option": { "key": "CRÉDITO - ELO (MÁQUINA)", "value": "REC" }, "active": true, "readOnly": false },
            { "option": { "key": "CRÉDITO - DINERS (MÁQUINA)", "value": "DNREST" }, "active": true, "readOnly": false },
            { "option": { "key": "CRÉDITO - VISA (MÁQUINA)", "value": "VSREST" }, "active": true, "readOnly": false },
            { "option": { "key": "CRÉDITO - NUGO (MÁQUINA)", "value": "NUGO" }, "active": false, "readOnly": false },
            { "option": { "key": "CRÉDITO - BANRICOMPRAS (MÁQUINA)", "value": "BANRC" }, "active": false, "readOnly": false },
            { "option": { "key": "CRÉDITO - HIPERCARD (MÁQUINA)", "value": "RHIP" }, "active": false, "readOnly": false },
            { "option": { "key": "CRÉDITO - VERDECARD (MÁQUINA)", "value": "VERDEC" }, "active": false, "readOnly": false },
            { "option": { "key": "CRÉDITO - GOODCARD (MÁQUINA)", "value": "GOODC" }, "active": false, "readOnly": false }
        ],
        "debitOffline": [
            { "option": { "key": "DÉBITO - BANRICOMPRAS (MÁQUINA)", "value": "BANRD" }, "active": false, "readOnly": false }
        ],
        "creditOnline": [
            { "option": { "key": "DINERS", "value": "DNR" }, "active": true, "readOnly": true },
            { "option": { "key": "MASTERCARD", "value": "MC" }, "active": true, "readOnly": true },
            { "option": { "key": "AMEX", "value": "AM" }, "active": true, "readOnly": true },
            { "option": { "key": "HIPERCARD ONLINE", "value": "HIPER" }, "active": true, "readOnly": true },
            { "option": { "key": "VISA", "value": "VIS" }, "active": true, "readOnly": true },
            { "option": { "key": "ELO", "value": "ELO" }, "active": true, "readOnly": true }
        ],
        "debitOnline": [
            { "option": { "key": "ELO DÉBITO", "value": "ELOD" }, "active": true, "readOnly": true },
            { "option": { "key": "MASTERCARD MAESTRO", "value": "MCMA" }, "active": true, "readOnly": true },
            { "option": { "key": "VISA ELECTRON", "value": "VISE" }, "active": true, "readOnly": true }
        ],
        "digitalWalletOnline": [
            { "option": { "key": "Google Pay Elo", "value": "GPY_ELO" }, "active": true, "readOnly": true },
            { "option": { "key": "Google Pay Master", "value": "GPY_MC" }, "active": true, "readOnly": true },
            { "option": { "key": "Apple Pay Visa", "value": "APL_VIS" }, "active": true, "readOnly": true },
            { "option": { "key": "Apple Pay Master", "value": "APL_MC" }, "active": true, "readOnly": true },
            { "option": { "key": "Google Pay Visa", "value": "GPY_VIS" }, "active": true, "readOnly": true }
        ]
    }
];
