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