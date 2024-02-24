import { FeedbackService } from "../services/feedback.service";
import { Request, Response } from "express";

export class FeedbackController {

    private service: FeedbackService;

    constructor() {
        this.service = new FeedbackService();
    }

    async getFeedbacks(req: Request, res: Response) {
        try {
            const feedbacks = await this.service.getFeedbacks();
            res.status(200).json(feedbacks);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getFeedbackById(req: Request, res: Response) {
        try {
            const feedback = await this.service.getFeedbackById(parseInt(req.params.id));
            res.status(200).json(feedback);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getFeedbackByTripId(req: Request, res: Response) {
        try {
            const feedback = await this.service.getFeedbackByTripId(parseInt(req.params.tripId));
            res.status(200).json(feedback);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getFeedbackByUserId(req: Request, res: Response) {
        try {
            const feedback = await this.service.getFeedbackByUserId(parseInt(req.params.userId));
            res.status(200).json(feedback);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createFeedback(req: Request, res: Response) {
        try {
            const feedback = await this.service.createFeedback(req.body);
            res.status(201).json(feedback);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateFeedback(req: Request, res: Response) {
        try {
            const feedback = await this.service.updateFeedback(parseInt(req.params.id), req.body);
            res.status(200).json(feedback);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteFeedback(req: Request, res: Response) {
        try {
            await this.service.deleteFeedback(parseInt(req.params.id));
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }




    


}