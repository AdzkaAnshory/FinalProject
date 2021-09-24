const defaultState = {
    tiket : [],
    namaPenumpang : "",
    umur : "",
    no_kursi : "", 
    statusPembayaran : ""
}

const authReducer = (state = defaultState, action) => {
    console.log("state:", state);
    console.log("action:", action.payload);
    switch (action.type) {
        case "Proses_Pembayaran":
            return {
                ...state,
                tiket : action.payload.tiket,
                namaPenumpang : action.payload.namaPenumpang,
                umur : action.payload.umur,
                no_kursi : action.payload.no_kursi,
                statusPembayaran: "Menunggu Pembayaran",
            }
        default:
            return state
    }
}

export default authReducer