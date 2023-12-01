const express = require("express")
const cors = require('cors');
const HotelRoom = require("./models/HotelRoom");
const Members = require("./models/Members");
const Gallery = require("./models/Gallery");
const CoreMembers = require("./models/CoreMember");
const app = express();
const Port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send({ message: 'server is running' })
})

// ============= Hostel Rooms =============

app.get("/hotelRoom", async (req, res) => {
    const rooms = await HotelRoom.findAll(req.body);
    res.json({ rooms });
});
app.get("/hotelRoom/:id", async (req, res) => {
    const rooms = await HotelRoom.findOne({where: {id: req.params.id}});
    res.json({ rooms });
});

app.post('/hotelRoom', async (req, res) => {
    console.log('req.body', req.body)
    try {
        const rooms = await HotelRoom.create(req.body);
        // res.send(req.body)
        res.json(rooms );
    } 
    catch(error){
        console.log('error', error.message)
    }
})

app.delete('/hotelRoom/:id', async (req, res) => {
    try {
        // Find the hotel room with the specified id
        const hotelRoom = await HotelRoom.findOne({ where: { id: req.params.id } });
        if (!hotelRoom) {
            // If the room is not found, send a 404 Not Found response
            return res.status(404).json({ error: 'Room not found' });
        }
        await hotelRoom.destroy();
        res.json({ rooms: 'deleted' });
    } catch (error) {
        // Handle errors, for example, if there's an issue with the database
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// ============= start members =========

app.post('/members', async (req, res) => {
    console.log('req.body', req.body)
    try {
        const rooms = await Members.create(req.body);
        // res.send(req.body)
        res.json(rooms);
        console.log(req.body)
    } 
    catch(error){
        console.log('error', error.message)
    }
})

app.get("/members", async (req, res) => {
    const rooms = await Members.findAll(req.body);
    res.json({ rooms });
});
app.get("/members/:id", async (req, res) => {
    const rooms = await Members.findOne({where: {id: req.params.id}});
    res.json({ rooms });
});

app.delete('/members/:id', async (req, res) => {
    try {
        // Find the hotel room with the specified id
        const hotelRoom = await Members.findOne({ where: { id: req.params.id } });
        if (!hotelRoom) {
            // If the room is not found, send a 404 Not Found response
            return res.status(404).json({ error: 'Room not found' });
        }

        // Use the destroy method on the instance to delete the record
        await hotelRoom.destroy();

        res.json({ rooms: 'deleted' });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ============= end members =========

// ============= start gallery ======

app.get("/gallery", async (req, res) => {
    const rooms = await Gallery.findAll(req.body);
    res.json({ rooms });
});
app.get("/gallery/:id", async (req, res) => {
    const rooms = await Gallery.findOne({where: {id: req.params.id}});
    res.json({ rooms });
});

app.post('/gallery', async (req, res) => {
    console.log('req.body', req.body)
    try {
        const rooms = await Gallery.create(req.body);
        // res.send(req.body)
        res.json(rooms);
        console.log(req.body)
    } 
    catch(error){
        console.log('error', error.message)
    }
})


app.delete('/gallery/:id', async (req, res) => {
    try {
        // Find the hotel room with the specified id
        const hotelRoom = await Gallery.findOne({ where: { id: req.params.id } });
        if (!hotelRoom) {
            // If the room is not found, send a 404 Not Found response
            return res.status(404).json({ error: 'Room not found' });
        }

        // Use the destroy method on the instance to delete the record
        await hotelRoom.destroy();

        res.json({ rooms: 'deleted' });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//============= end gallery ======

//============= core members server =====

app.get("/coremember", async (req, res) => {
    const rooms = await CoreMembers.findAll(req.body);
    res.json({ rooms });
});
app.get("/coremember/:id", async (req, res) => {
    const rooms = await CoreMembers.findOne({where: {id: req.params.id}});
    res.json({ rooms });
});

app.post('/coremember', async (req, res) => {
    console.log('req.body', req.body)
    try {
        const rooms = await CoreMembers.create(req.body);
        // res.send(req.body)
        res.json(rooms);
        console.log(req.body)
    } 
    catch(error){
        console.log('error', error.message)
    }
})

app.delete('/coremember/:id', async (req, res) => {
    try {
        // Find the hotel room with the specified id
        const hotelRoom = await CoreMembers.findOne({ where: { id: req.params.id } });
        if (!hotelRoom) {
            // If the room is not found, send a 404 Not Found response
            return res.status(404).json({ error: 'Room not found' });
        }
        await hotelRoom.destroy();
        res.json({ rooms: 'deleted' });
    } catch (error) {
        // Handle errors, for example, if there's an issue with the database
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//============= end of core members








app.listen(Port, () => {
    console.log(`server is running ${Port}`)
})