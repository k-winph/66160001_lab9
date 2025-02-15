fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          const userList = document.getElementById('user-list');
          users.forEach(user => {
            const userItem = document.createElement('div');
            userItem.classList.add('user-item');
            userItem.innerHTML = `<strong>${user.name}</strong><span>${user.email}</span>`;
            userList.appendChild(userItem);
          });
        })
        .catch(error => console.error('Error fetching users:', error));