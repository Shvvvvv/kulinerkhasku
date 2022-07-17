const initialState = {
  registerUserData: {
    status: false,
    message: '',
    data: [],
  },
  infodataUser: {status: false, message: '', data: {}},
  dataToko: {status: false, message: '', data: []},
  tampToko: {},
  dataUser: {},
  allUser: [],
};
const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'SUCCESS_REGISTER_USER':
      return {
        ...state,
        registerUserData: actions.payload,
      };
    case 'SUCCES_LOGIN':
      return {
        ...state,
        dataUser: actions.payload,
      };
    case 'SUCCESS_REGISTER_TOKO':
      return {
        ...state,
        dataToko: actions.payload,
      };
    case 'NEXT_SIGNUP_TOKO':
      return {
        ...state,
        tampToko: actions.payload,
      };
    case 'GET_ALL_USER':
      return {
        ...state,
        allUser: actions.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
