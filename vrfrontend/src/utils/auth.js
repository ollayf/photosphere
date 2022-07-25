export async function login (email, password, username=null) { 
    const res = await fetch('http://34.87.107.21:8000/api/verifyPassword/',
      {
        method: 'POST',
        body: JSON.stringify({ 
          email: email,
          password: password,
          username: null
        }),
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      return res
}

export async function signup (email, username, password, firstname, lastname) { 
    const res = await fetch('http://34.87.107.21:8000/api/addUser/',
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
    })
    return res
}

export async function usernameExists (username) { 
    if (!username) {
      return 404
    }
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

export async function emailExists (email) { 
  if (!email) {
    return 404
  }
  const res = await fetch('http://34.87.107.21:8000/api/emailExists/',
  {
    method: 'POST',
    body: JSON.stringify({
      email: email
    }),
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return res.status
}

export async function editField (userId, field, result) { 
  const res = await fetch('http://34.87.107.21:8000/api/editField/',
  {
    method: 'POST',
    body: JSON.stringify({
      userId: userId,
      field: field,
      result: result

    }),
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return res.status
}

export async function editProfile (userId, username=null, email=null, firstname=null, lastname=null) { 
  const res = await fetch('http://34.87.107.21:8000/api/editProfile/',
  {
    method: 'PUT',
    body: JSON.stringify({
      userId: userId,
      username: username,
      email: email,
      firstname: firstname,
      lastname: lastname
    }),
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return res.status
}

export async function getProfile (userId) { 
  const res = await fetch('http://34.87.107.21:8000/api/getProfile/',
  {
    method: 'POST',
    body: JSON.stringify({
      userId: userId,
    }),
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return res
}

export async function changePasswordBE (userId, new_pw) { 
  const res = await fetch('http://34.87.107.21:8000/api/changePassword/',
  {
    method: 'PUT',
    body: JSON.stringify({
      userId: userId,
      new_pw: new_pw

    }),
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return res.status
}

export async function checkPasswordBE (userId, old_pw) { 
  const res = await fetch('http://34.87.107.21:8000/api/checkPassword/',
  {
    method: 'POST',
    body: JSON.stringify({
      userId: userId,
      pw: old_pw,

    }),
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return res.status
}