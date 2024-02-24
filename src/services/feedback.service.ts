import { Repository } from "typeorm";
import { Feedback } from '@nosleepfullbuild/uniride-library/dist/entity/feedback/feedback.entity';
import { AppDataSource } from "../app-data-source";

export class FeedbackService {

    private repository: Repository<Feedback>

    constructor() {
        this.repository = AppDataSource.getRepository(Feedback);
    }

    async getFeedbacks() {

        try {
            const feedbacks = await this.repository.find();
            return feedbacks;
        } catch (error) {
            throw error;
        }

    }

    async getFeedbackById(id: number) {
        try {
            const feedback = await this.repository.findOneBy({ id: id });
            if (!feedback) {
                throw new Error('Feedback not found');
            }
            return feedback;
        } catch (error) {
            throw error;
        }
    }

    async getFeedbackByTripId(tripId: number) {
        try {
            const feedback = await this.repository.findOneBy({ tripId: tripId });
            if (!feedback) {
                throw new Error('Feedback not found');
            }
            return feedback;
        } catch (error) {
            throw error;
        }
    }

    async getFeedbackByUserId(userId: number) {
        try {
            const feedback = await this.repository.findOneBy({ userId: userId });
            if (!feedback) {
                throw new Error('Feedback not found');
            }
            return feedback;
        } catch (error) {
            throw error;
        }
    }

    async createFeedback(feedbackData: {
        driverId: number,
        tripId: number;
        userId: number;
        rating: number;
        comment: string;
    }) {
        try {
            if (feedbackData.rating < 0 || feedbackData.rating > 5) {
                throw new Error('Rating must be between 0 and 5');
            }

            const feedback = this.repository.create(feedbackData);
            await this.repository.save(feedback);
            return feedback;
        } catch (error) {
            throw error;
        }
    }

    async updateFeedback(id: number, feedbackData: {
        tripId: number;
        userId: number;
        rating: number;
        comment: string;
    }) {

        try {
            const feedback = await this.repository.findOneBy({ id });
            if (!feedback) {
                throw new Error('Feedback not found');
            }

            if (feedbackData.rating < 0 || feedbackData.rating > 5) {
                throw new Error('Rating must be between 0 and 5');
            }

            await this.repository.update(id, feedbackData);
            return feedback;
        } catch (error) {
            throw error;
        }
    }

    async deleteFeedback(id: number) {
        try {
            const feedback = await this.repository.findOneBy({ id });
            if (!feedback) {
                throw new Error('Feedback not found');
            }

            await this.repository.delete({ id });
            return { message: 'Feedback deleted successfully' };
        } catch (error) {
            throw error;
        }
    }

}