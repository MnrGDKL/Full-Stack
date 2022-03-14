

const tbody       = document.getElementById("tbodyUserList");
const loading     = document.getElementById("loading"); 

window.onload = () => {
      alert("API Keys:\n" + DecryptStringAES(localStorage.getItem("apiKey")));
      getApiUserList();
      setInterval(getApiUserList, 5000);
}

const getApiUserList = async () =>{
      showLoading();
      //! Axios
      try {
            // const responseData = await axios.get("https://reqres.in/api/users?page=1");
            const responseData = await axios({
                  url: "https://reqres.in/api/users?page=1",
                  method: "get",
                  // data:  bodyData
            })
            const {data:userListArray} = responseData.data;
            console.log(userListArray);
            if (userListArray.length === 0){
                  new Error("userlist not found");
                  removeLoading();
            }
            else {
                  tbody.innerHTML = "";
                  userListArray.forEach(customer => {
                        tbody.innerHTML += `
                        <tr>
                              <td>
                                    ${customer.id}
                              </td>
                              <td>
                                    <img src="${customer.avatar}">
                              </td>
                              <td>
                                    ${customer.email}
                              </td>
                              <td>
                                    ${customer.first_name}
                              </td>
                              <td>
                                    ${customer.last_name}
                              </td>
                        </tr> `
                  });
            }
            removeLoading();
      }
      catch(error) {
            alert(error);
            //! send errors to api and database (errorLogs table)
            //? postErrorLog("UserList", "getApiUserList", error);
            removeLoading();
      }
}
