// add user email into db
export const saveUser = user => {
    const currentUser = {
        email: user.email,
    }
    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json()).then(data => console.log(data));
}


// become a host 
export const becomeHost = email => {
    const currentUser = {
        role: 'host',
    }
    fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json()).then(data => console.log(data));
}