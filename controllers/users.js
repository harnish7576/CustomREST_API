import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUser = (req,res) => {
    console.log(users);
    res.send(users);
};

export const createUser = (req,res) => {
    console.log('POST ROUTE REACHED');
    // console.log(req.body);

    const user = req.body;

    users.push({ ...user, id: uuidv4()})

    res.send(`User with the name ${user.firstname} added to the database!`);
};

export const getUserById = (req,res) => {
    console.log(req.params)
  
    const { id } = req.params

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser)
};

export const deleteUser = (req, res) => {
    const {id} = req.params;

    const deleteUser = users.find((user) => user.id === id);

    users = users.filter((user) => user.id !== id);
    res.send(`User ${deleteUser.firstname} with the id ${id} deleted from the database.`);
};

export const UpdateUser = (req,res) => {
    const {id} = req.params;

    const user = users.find((user) => user.id === id);
    const { firstname, lastname, age } = req.body;

    if (firstname) user.firstname = firstname
    if (lastname) user.lastname = lastname
    if (age) user.age = age

    res.send(`User with the id ${id} has been updated.`);

};