import { BaseEntity } from '@nosleepfullbuild/uniride-library/dist/entity/base.entity';
import { Column, Entity } from 'typeorm';

export enum Rating {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5
}

@Entity()
export class Feedback extends BaseEntity {

    @Column({ type: 'int'})
    driverId: number;

    @Column({ type: 'int'})
    tripid: number;

    @Column({ type: 'int'})
    userId: number;

    @Column({ type: 'int'})
    rating: Rating;

    @Column({ type: 'varchar', length: 255 })
    comment: string;

}