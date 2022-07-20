export async function getSpheres (userId) { 
    const res = await fetch('http://34.87.107.21:8000/api/getSpheresGlance/',
      {
        method: 'POST',
        body: JSON.stringify({ 
          userId: userId
        }),
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      return res
}

export async function deleteSphere (userId, sphereId) { 
  console.log(userId, sphereId)
  const res = await fetch('http://192.168.10.70:8000/api/deleteImage/',
    {
      method: 'DELETE',
      body: JSON.stringify({ 
        userId: userId,
        sphereId: sphereId
      }),
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    return res
}