export const getTasks = async () => {
    const response = await fetch(
        `http://localhost:8080/api/tasks`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    )
    return response.json();
};

export const addTask = async(data) => {
    const res = await fetch(
        `http://localhost:8080/api/tasks`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        }
    )
        return res.json();
};

export const deleteTask = async (id) => {
    const res =  fetch(
        `http://localhost:8080/api/tasks/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    )
    return res;
};

export const updateTask = async (data) => {
    const res = await fetch(
        `http://localhost:8080/api/tasks/${data._id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        }
    )
        return res.json();
};

export const login = async (username, password) => {
    try {
        const response = await fetch('http://localhost:8080/api/users', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({ username: username, password: password })
        });
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ 
                success: false, 
                msg: `Server error: ${response.status} ${response.statusText}` 
            }));
            throw new Error(errorData.msg || `Server error: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
            throw new Error('Cannot connect to server. Please make sure the API server is running on http://localhost:8080');
        }
        throw error;
    }
};

export const signup = async (username, password) => {
    try {
        const response = await fetch('http://localhost:8080/api/users?action=register', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({ username: username, password: password })
        });
        
        if (!response.ok) {
            // Try to parse error response
            const errorData = await response.json().catch(() => ({ 
                success: false, 
                msg: `Server error: ${response.status} ${response.statusText}` 
            }));
            throw new Error(errorData.msg || `Server error: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        // Handle network errors or other fetch failures
        if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
            throw new Error('Cannot connect to server. Please make sure the API server is running on http://localhost:8080');
        }
        throw error;
    }
};

