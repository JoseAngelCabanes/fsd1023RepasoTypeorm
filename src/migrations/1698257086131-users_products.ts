import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class UsersProducts1698257086131 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users_products",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "user_id",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "product_id",
                        type: "varchar",
                        length: "255",
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["user_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "users",
                        onDelete: "CASCADE",
                    },
                    {
                        columnNames: ["product_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "products",
                        onDelete: "CASCADE",
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_products");
    }

}
