const url = "https://jsonplaceholder.typicode.com/users";

const getUserServices = async ( axios ) => { 
    const {data} = await axios.get(url);
    return data;
}

const createdUserServices = async (body, axios ) => {
    const { data } = await axios.post(url,body);
    return data;
}

const updateUserServices = async (id, body,axios) => {
    
    const data =await axios.put(url + '/' + id, body);
    return 204;
}

const deleteUserServices = async(id,axios) => { 
    await axios.delete(url + '/' + id);
    return 204;
}

module.exports={ getUserServices, createdUserServices, updateUserServices, deleteUserServices }