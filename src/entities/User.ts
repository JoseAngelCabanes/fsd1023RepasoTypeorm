import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("users")
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    user!: string

    @Column()
    email!: string

    @Column()
    password!: string

    @Column()
    createdAt!: Date

    @Column()
    updatedAt!: Date

    @Column()
    role!: string

}