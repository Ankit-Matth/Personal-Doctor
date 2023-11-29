const express = require("express")
const routes = express.Router()
const booking = require("../models/bookings")
const doctor = require("../models/doctors")
const patient = require("../models/patients")
const mongoose = require("mongoose")

routes.get('/',(req,res)=>{
    res.render("index")
})
routes.get('/about',(req,res)=>{
    res.render("about")
})
routes.get('/searchDoctor',(req,res)=>{
    doctor.find({}).then((dataDoctor)=>{
        res.render("patients/searchDoctor",{dataDoctor})
    }).catch((y)=>{
        console.log(y)
    }) 
})
routes.get('/yourAppointments', (req, res) => {
    doctor.find({}).then((dataDoctor) => {
        const chargeData = dataDoctor.map(doctor => ({ username: doctor.username, charge: doctor.charge }));

        booking.find({}).then((dataBookings) => {
            const combinedData = dataBookings.map(booking => {
                const matchingChargeData = chargeData.find(doctor => doctor.username === booking.docUserName);
                return { ...booking._doc, charge: matchingChargeData ? matchingChargeData.charge : null };
            });

            res.render("patients/yourAppointments", { dataBookings: combinedData });
        }).catch((error) => {
            console.log(error);
            res.status(500).send("Internal Server Error");
        });
    }).catch((error) => {
        console.log(error);
        res.status(500).send("Internal Server Error");
    });
});

routes.get('/contact',(req,res)=>{
    res.render("contact")
})
routes.get('/dashboard', (req, res) => {
    patient.find({}).then((dataPatient) => {
        booking.find({}).then((dataBookings) => {
            const patientMap = new Map(dataPatient.map(patient => [patient.userName, patient]));

            const combinedData = dataBookings.map(booking => ({
                ...booking._doc,
                rating: patientMap.has(booking.userName) ? patientMap.get(booking.userName).rating : null,
                totalCalls: patientMap.has(booking.userName) ? patientMap.get(booking.userName).totalCalls : null,
            }));

            res.render("doctors/dashboard", { dataBookings: combinedData });
        }).catch((error) => {
            console.log(error);
            res.status(500).send("Internal Server Error");
        });
    }).catch((error) => {
        console.log(error);
        res.status(500).send("Internal Server Error");
    });
});

routes.get('/pendingRequests',(req,res)=>{
    patient.find({}).then((dataPatient) => {
        booking.find({}).then((dataBookings) => {
            const patientMap = new Map(dataPatient.map(patient => [patient.userName, patient]));

            const combinedData = dataBookings.map(booking => ({
                ...booking._doc,
                rating: patientMap.has(booking.userName) ? patientMap.get(booking.userName).rating : null,
                totalCalls: patientMap.has(booking.userName) ? patientMap.get(booking.userName).totalCalls : null,
            }));

            res.render("doctors/pendingRequests", { dataBookings: combinedData });
        }).catch((error) => {
            console.log(error);
            res.status(500).send("Internal Server Error");
        });
    }).catch((error) => {
        console.log(error);
        res.status(500).send("Internal Server Error");
    });
})
routes.get('/doctorApplication',(req,res)=>{
    res.render("doctors/doctorApplication")
})
routes.get('/signup',(req,res)=>{
    res.render("signup")
})
routes.get('/patientLogin',(req,res)=>{
    res.render("patientLogin")
})
routes.get('/doctorLogin',(req,res)=>{
    res.render("doctorLogin")
})
routes.get('/notFound',(req,res)=>{
    res.render("notFound")
})
routes.get('/bookAppoint',(req,res)=>{
    res.render("bookAppoint")
})
routes.get('/drugUses',(req,res)=>{
    res.render("drugUses")
})
routes.get('/patientConsult/:username/:docUserName',(req,res)=>{
    const username = req.params.username
    const docUserName = req.params.docUserName
    res.render("patients/patientConsult",{docUserName,username})
})
routes.get('/doctorConsult/:username/:docName',(req,res)=>{
    const username = req.params.username
    const docName = req.params.docName
    res.render("doctors/doctorConsult",{username,docName})
})

routes.get('/accepted/:bookingId', async (req, res) => {
    try {
      const bookingId = new mongoose.Types.ObjectId(req.params.bookingId);
      const updatedBooking = await booking.findByIdAndUpdate(bookingId, { isAccepted: true }, { new: true });
  
      if (updatedBooking) {
        const dataBookings = await booking.find({});
        res.render('doctors/pendingRequests', { dataBookings });
      } else {
        res.status(404).send('Booking not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
});
routes.get('/cancelled/:bookingId', async (req, res) => {
    try {
      const bookingId = new mongoose.Types.ObjectId(req.params.bookingId);
      const updatedBooking = await booking.findByIdAndUpdate(bookingId, { isAccepted: false }, { new: false });
  
      if (updatedBooking) {
        const dataBookings = await booking.find({});
        res.render('doctors/pendingRequests', { dataBookings });
      } else {
        res.status(404).send('Booking not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
});

routes.get('/makeCall/:username/:docName',(req,res)=>{
    var username = req.params.username
    const docName = req.params.docName
    res.render("call",{username,docName})
})

module.exports=routes