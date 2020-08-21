

// state bảng giá
var gheDatState = [

]


export default (state = gheDatState, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            let gheUpdate = [...state];
            let gheCapNhat = {
                "soGhe": action.soGhe,
                "gia": action.gia,
            };
            // 
            let index = gheUpdate.findIndex(item => item.soGhe === action.soGhe);
            
            if (index !== -1) {
                alert('ghế đã đặt!')
            } else {
                gheUpdate.push(gheCapNhat)
            }

            state = gheUpdate;
            return [...state];
        }

        case 'XOA_GHE': {
            let gheUpdate = [...state];
            let index = gheUpdate.findIndex(item => item.soGhe === action.soGhe);
            if (index !== -1) {
                gheUpdate.splice(index, 1);
            }
            state = gheUpdate;
            return [...state];
        }
        default:
            return state;
    }
}