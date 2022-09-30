import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1664322329124 implements MigrationInterface {
  name = 'migration1664322329135';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` CHANGE \`link\` \`link\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Admin\` ADD \`name\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Admin\` ADD \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Admin\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Admin\` ADD \`refreshtoken\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Admin\` ADD \`refreshtokenexp\` date NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Admin\` CHANGE \`password\` \`password\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`posIdBranch_branch\` \`posIdBranch_branch\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` ADD \`brandKey\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` CHANGE \`link\` \`link\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` CHANGE \`password\` \`password\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` DROP INDEX \`IDX_ce88f5788990d08fc957067b3f\``,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
