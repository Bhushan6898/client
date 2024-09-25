
import Repository from "./repository";

class UserRepository {git
    //gell all clients
    async AddClients(payload) {
      const response = await Repository.post('/register',payload)
      .then((response) => {
        console.log(response);
        return response;
        
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
    return response;
  }
  async Loginhere(payload) {
    const response = await Repository.post('/login',payload)
    .then((response) => {
      console.log(response);
      return response;
      
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
  return response;
}

async getProfile() {

  const response = await Repository.get('/profile')
  .then((response) => {
    console.log(response);
    return response;
    
  })
  .catch((error) => {
    console.log(error);
    return error;
  });
return response;
}


async getProduct() {
  const response = await Repository.get('/get-product')
  .then((response) => {
    console.log(response);
    return response;
    
  })
  .catch((error) => {
    console.log(error);
    return error;
  });
return response;
}
async postPRODUCT(payload) {
const response = await Repository.post('/add-product',payload)
  .then((response) => {
    console.log(response);
    return response;
    
  })
  .catch((error) => {
    console.log(error);
    return error;
  });
return response;
}
    }
  

  export default new UserRepository();
  