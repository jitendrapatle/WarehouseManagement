export const GLOBAL_CONSTANT = {
  API_METHODS:{
    LOGIN: "Login",
    GET_ALL_WAREHOUSE: 'GetAllWarehouses',
    GET_WAREHOUSE_BY_ID: 'GetAllWarehouses/id',
    ADD_WAREHOUSE: 'AddWarehouse',
    UPDATE_WAREHOUSE: 'UpdateWarehouse/id',
    DELETE_WAREHOUSE: 'DeleteWarehouse/id',

    GET_ALL_SPACE: 'GetAllSpaces', 
    GET_SPACE_BY_ID: 'GetSpaceById/id', 
    ADD_SPACE: 'AddSpace', 
    UPDATE_SPACE: 'UpdateSpaces/id', 
    DELETE_SPACE: 'DeleteSpaces/id', 
    GET_SPACE_AVAILABILITY: 'GetSpaceAvailability/{warehouseId}', 
    GET_WAREHOUSE_ROOM_DASHBOARD: 'GetWarehouseRoomDashboard/{warehouseId}', 
    GET_OWNER_DASHBOARD: 'GetOwnerDashboard', 
  },
  Local_Storage_Login_Key : 'loggedInUser'
} 
 