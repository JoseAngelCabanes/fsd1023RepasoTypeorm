import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("tasks")
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    title!: string

    @Column()
    createdAt!: Date

    @Column()
    updatedAt!: Date

}