import { MigrationInterface, QueryRunner } from "typeorm";

export class firstMigration1672205627786 implements MigrationInterface {
    name = 'firstMigration1672205627786'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "apartments" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "apartment_id" character varying NOT NULL, "title" character varying, "link" character varying, CONSTRAINT "UQ_ac33b4fc38181ab0e7da2c13dbb" UNIQUE ("apartment_id"), CONSTRAINT "PK_f6058e85d6d715dbe22b72fe722" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "apartments"`);
    }

}
