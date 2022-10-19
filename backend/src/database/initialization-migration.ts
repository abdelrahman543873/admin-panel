import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1664322329124 implements MigrationInterface {
  name = 'migration1664322329149';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` CHANGE \`link\` \`link\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Admin\` ADD \`name\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Campaign\` ADD \`logo\` varchar(255) NULL`,
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
    await queryRunner.query('SET FOREIGN_KEY_CHECKS = 0');
    await queryRunner.query(
      `ALTER TABLE \`CampaignType\` MODIFY COLUMN idCampaignType INT auto_increment`,
    );
    await queryRunner.query('SET FOREIGN_KEY_CHECKS = 1');
    await queryRunner.query(
      `CREATE TABLE if not exists \`MerchantCategory\` (\`idMerchantCategory\` int NOT NULL AUTO_INCREMENT, \`titleEn\` varchar(255) NOT NULL, \`titleAr\` varchar(255) NOT NULL, \`descriptionEn\` varchar(255) NULL, \`descriptionAr\` varchar(255) NULL, \`logo\` varchar(255) NULL, UNIQUE INDEX \`IDX_83c4a1c6ae257a85d53dc30d31\` (\`titleEn\`), UNIQUE INDEX \`IDX_3cf3f0cd2522ed18144265b9bd\` (\`titleAr\`), PRIMARY KEY (\`idMerchantCategory\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` ADD \`idCategory\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` ADD INDEX \`IDX_f5afc6bd442e26f5f60503c117\` (\`idCategory\`)`,
    );
    await queryRunner.query(
      `CREATE INDEX \`REL_f5afc6bd442e26f5f60503c117\` ON \`Merchant\` (\`idCategory\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` ADD CONSTRAINT \`FK_f5afc6bd442e26f5f60503c117c\` FOREIGN KEY (\`idCategory\`) REFERENCES \`MerchantCategory\`(\`idMerchantCategory\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` ADD \`activationDate\` datetime NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
