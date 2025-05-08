import express from 'express';
const routes = express.Router();

const contacts = [];

routes.get('/', (req, res) => {
    res.json(contacts);
    console.log('API was accessed')

})
routes.post('/', (req, res) => {
    const contact = req.body;
    contacts.push(contact);
    res.status(201).json(contact);
    console.log('Contact added')
})
routes.delete('/:id', (req, res) => {
    const  id  = req.params.id;
    const index = contacts.findIndex(contact => contact.id === id);
    contacts.splice(index, 1);
    res.json(contacts)
    console.log('Contact deleted')
})




export default routes;