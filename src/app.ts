import * as express from "express"
import { AppDataSource } from "./app-data-source"
import { FeedbackController } from "./controllers/feedback.controller"

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const app = express()
app.use(express.json())

app.get('/api/feedback/healthcheck', (req, res) => {
    res.status(200).send('Feedback service is running')
})

const feedbackController = new FeedbackController();

app.get('/api/feedbacks', feedbackController.getFeedbacks.bind(feedbackController));
app.get('/api/feedbacks/:id', feedbackController.getFeedbackById.bind(feedbackController));
app.get('/api/feedbacks/trip/:tripId', feedbackController.getFeedbackByTripId.bind(feedbackController));
app.get('/api/feedbacks/user/:userId', feedbackController.getFeedbackByUserId.bind(feedbackController));
app.post('/api/feedbacks', feedbackController.createFeedback.bind(feedbackController));
app.put('/api/feedbacks/:id', feedbackController.updateFeedback.bind(feedbackController));
app.delete('/api/feedbacks/:id', feedbackController.deleteFeedback.bind(feedbackController));


app.listen(Number(process.env.PORT), ()=>{
    console.log("Feedback service is running on port " + process.env.PORT);
})