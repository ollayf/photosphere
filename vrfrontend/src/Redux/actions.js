export function loadSpheres(spheres) {
    return {
        type: "loadSpheres",
        payload: spheres
    }
}

export function selectSphere(sphere) {
    return {
        type: "selectSphere",
        payload: sphere
    }
}