 let userForm = document.getElementById('reg-form')  
 let userEntries = []

 const retriveEntries = () => {
    let locEntries = localStorage.getItem('user-entries')
    if (locEntries) {
        locEntries = JSON.parse(locEntries)
    } else {
        locEntries = []
    }
    return locEntries
}

const displayEntries = () => {
    const entries = retriveEntries()

    const tableEntries = entries.map((entry) => {
        const nameCell = `<td>${entry.name}</td>`
        const emailCell = `<td>${entry.email}</td>`
        const passwordCell = `<td>${entry.password}</td>`
        const dobCell = `<td>${entry.dob}</td>`
        const acceptTermsCell = `<td>${entry.acceptedTerms}</td>`

        const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}`
        return row
    }).join('\n')

    let tile = `
    <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
        <th scope="col">Dob</th>
        <th scope="col">Accepted terms?</th>
    </tr>`

    let tableHtml = tile + tableEntries
    let table = document.getElementById('localStorage')
    table.innerHTML = tableHtml
    table.innerHTML
}
const saveUserForm = (event) => {
    event.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const dob = document.getElementById('dob').value
    
    // console.log(dob)

    const acceptedTerms = document.getElementById('acceptTerm').checked

    const entry = {
                    name,
                    email,
                    password,
                    dob,
                    acceptedTerms
    }

    userEntries.push(entry)
    localStorage.setItem('user-entries', JSON.stringify(userEntries))
    displayEntries()
}
userForm.addEventListener('submit', saveUserForm)

 
