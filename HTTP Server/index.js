const express = require('express');

const app = express();

const courses = [
    {id : 1, name: 'curses1'},
    {id : 2, name: 'curses2'},
    {id : 3, name: 'curses3'}
]
app.get('/', (req, res)=>{
    res.send('hello word');
});

app.get('/api/courses', (req, res) =>{
    res.send(courses);
})
 app.get('/api/courses/:id', (req, res)=>{
    
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send(' the course with given id is worng')
    res.send(course)
 });

 
const port = 3000;

app.listen(port, ()=>{
    console.log(`listening on port ${port}.....`);
})