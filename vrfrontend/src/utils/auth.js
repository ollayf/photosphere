export async function login (username, password, navigation) { 
    const res = await fetch('http://34.87.107.21:8000/api/verifyPassword/',
      {
        method: 'POST',
        body: JSON.stringify({ 
          username: username,
          password: password
        }),
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      return res
}

export function signup (email, username, password, firstname, lastname, navigation) { 
    fetch('http://34.87.107.21:8000/api/addUser/',
    {
      method: 'POST',
      body: JSON.stringify({
        email: email, 
        username: username,
        password: password, 
        firstname: firstname, 
        lastname: lastname
      }),
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((res) => {
      if (res.status == 201) {
        console.log("YEETING")
        navigation.navigate('Profile');
      } else {
        return false
      }
    })
}

export async function usernameExists (username) { 
    const res = await fetch('http://34.87.107.21:8000/api/usernameExists/',
    {
      method: 'POST',
      body: JSON.stringify({
        username: username
      }),
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    return res.status
}
