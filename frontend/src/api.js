export function login (username, password) { 
    fetch('http://192.168.10.143:8000/api/verifyPassword/',
      {
        method: 'POST',
        body: JSON.stringify({ 
          username: "",
          password: ""
        }),
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then((res) => {
        if (res.status == 200) {
          navigation.navigate('Profile');
        }
      })
    
}

export function signup (username, password, firstname, lastname) { 
    fetch('http://192.168.10.143:8000/api/verifyPassword/',
    {
      method: 'POST',
      body: JSON.stringify({ 
        username: "",
        password: "", 
        firstname: "", 
        lastname: ""
      }),
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((res) => {
      if (res.status == 200) {
        navigation.navigate('Login');
      }
    })
}

export function usernameExists (username, password, firstname, lastname) { 
    fetch('http://192.168.10.143:8000/api/verifyPassword', 
    {
        method: 'POST', 
        body: JSON.stringify({ 
            username,
            password,
            firstname, 
            lastname

        }), 
        
    })
}
