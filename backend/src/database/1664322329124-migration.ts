import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1664322329124 implements MigrationInterface {
  name = 'migration1664322329124';

  public async up(queryRunner: QueryRunner): Promise<void> {
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
      `ALTER TABLE \`Merchant\` ADD \`brandKey\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Admin\` ADD UNIQUE INDEX \`IDX_fca5840681c3854ea15e03e4a2\` (\`email\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` ADD \`name\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`Merchant\` DROP COLUMN \`name_ar\``);
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` ADD \`name_ar\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` ADD UNIQUE INDEX \`IDX_9fa80fea402e21078b46abd5cd\` (\`name_ar\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` DROP COLUMN \`description_ar\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` ADD \`description_ar\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_76d44e210594dd4ecf817eb425\` ON \`Merchant\``,
    );
    await queryRunner.query(`ALTER TABLE \`Merchant\` DROP COLUMN \`email\``);
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` ADD \`email\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` ADD UNIQUE INDEX \`IDX_76d44e210594dd4ecf817eb425\` (\`email\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` CHANGE \`link\` \`link\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` CHANGE \`password\` \`password\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` DROP COLUMN \`createdAt\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` ADD \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` ADD UNIQUE INDEX \`IDX_5b97b930dfffe8baad191a195f\` (\`idPos\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`idCity\` \`idCity\` int NULL DEFAULT '1'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` DROP COLUMN \`posIdBranch_branch\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` ADD \`posIdBranch_branch\` varchar(255) NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`Branch\` DROP COLUMN \`district\``);
    await queryRunner.query(
      `ALTER TABLE \`Branch\` ADD \`district\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` DROP COLUMN \`district_ar\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` ADD \`district_ar\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` DROP COLUMN \`managerName\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` ADD \`managerName\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` DROP COLUMN \`managerPhoneNumber\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` ADD \`managerPhoneNumber\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`branch_createdAt\` \`branch_createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`hasPickup\` \`hasPickup\` tinyint NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`isDeleted\` \`isDeleted\` tinyint NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(`ALTER TABLE \`Branch\` DROP COLUMN \`address\``);
    await queryRunner.query(
      `ALTER TABLE \`Branch\` ADD \`address\` varchar(255) NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`Branch\` DROP COLUMN \`location\``);
    await queryRunner.query(
      `ALTER TABLE \`Branch\` ADD \`location\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`updatedAt\` \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(`ALTER TABLE \`Branch\` DROP COLUMN \`nameEn\``);
    await queryRunner.query(
      `ALTER TABLE \`Branch\` ADD \`nameEn\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`Branch\` DROP COLUMN \`nameAr\``);
    await queryRunner.query(
      `ALTER TABLE \`Branch\` ADD \`nameAr\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`Branch\` DROP COLUMN \`workingHr\``);
    await queryRunner.query(
      `ALTER TABLE \`Branch\` ADD \`workingHr\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`idMerchant\` \`idMerchant\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` CHANGE \`link\` \`link\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` CHANGE \`password\` \`password\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` ADD UNIQUE INDEX \`IDX_5b97b930dfffe8baad191a195f\` (\`idPos\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`idCity\` \`idCity\` int NULL DEFAULT '1'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`branch_createdAt\` \`branch_createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`hasPickup\` \`hasPickup\` tinyint NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`isDeleted\` \`isDeleted\` tinyint NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`updatedAt\` \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`idMerchant\` \`idMerchant\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` CHANGE \`link\` \`link\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` CHANGE \`password\` \`password\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` ADD UNIQUE INDEX \`IDX_5b97b930dfffe8baad191a195f\` (\`idPos\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`idCity\` \`idCity\` int NULL DEFAULT '1'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`branch_createdAt\` \`branch_createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`hasPickup\` \`hasPickup\` tinyint NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`isDeleted\` \`isDeleted\` tinyint NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`updatedAt\` \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` CHANGE \`idMerchant\` \`idMerchant\` int NULL`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX \`REL_5b97b930dfffe8baad191a195f\` ON \`Merchant\` (\`idPos\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Merchant\` ADD CONSTRAINT \`FK_5b97b930dfffe8baad191a195f2\` FOREIGN KEY (\`idPos\`) REFERENCES \`pos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Branch\` ADD CONSTRAINT \`FK_037082289c0af64352233ba5c70\` FOREIGN KEY (\`idMerchant\`) REFERENCES \`Merchant\`(\`idMerchant\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(`ALTER TABLE \`Branch\` DROP FOREIGN KEY \`FK_037082289c0af64352233ba5c70\``);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` DROP FOREIGN KEY \`FK_5b97b930dfffe8baad191a195f2\``);
    // await queryRunner.query(`DROP INDEX \`REL_5b97b930dfffe8baad191a195f\` ON \`Merchant\``);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`idMerchant\` \`idMerchant\` int NOT NULL`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`updatedAt\` \`updatedAt\` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`isDeleted\` \`isDeleted\` tinyint NULL DEFAULT '0'`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`hasPickup\` \`hasPickup\` tinyint NULL DEFAULT '0'`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`branch_createdAt\` \`branch_createdAt\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`idCity\` \`idCity\` int NOT NULL DEFAULT '1'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` DROP INDEX \`IDX_5b97b930dfffe8baad191a195f\``);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` CHANGE \`password\` \`password\` varchar(255) COLLATE "utf8mb4_unicode_ci" NOT NULL DEFAULT 'test'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` CHANGE \`link\` \`link\` varchar(255) COLLATE "utf8mb4_unicode_ci" NOT NULL`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`idMerchant\` \`idMerchant\` int NOT NULL`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`updatedAt\` \`updatedAt\` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`isDeleted\` \`isDeleted\` tinyint NULL DEFAULT '0'`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`hasPickup\` \`hasPickup\` tinyint NULL DEFAULT '0'`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`branch_createdAt\` \`branch_createdAt\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`idCity\` \`idCity\` int NOT NULL DEFAULT '1'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` DROP INDEX \`IDX_5b97b930dfffe8baad191a195f\``);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` CHANGE \`password\` \`password\` varchar(255) COLLATE "utf8mb4_unicode_ci" NOT NULL DEFAULT 'test'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` CHANGE \`link\` \`link\` varchar(255) COLLATE "utf8mb4_unicode_ci" NOT NULL`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`idMerchant\` \`idMerchant\` int NOT NULL`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` DROP COLUMN \`workingHr_ar\``);
    // await queryRunner.query(`ALTER TABLE \`Branch\` ADD \`workingHr_ar\` json NULL`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` DROP COLUMN \`workingHr\``);
    // await queryRunner.query(`ALTER TABLE \`Branch\` ADD \`workingHr\` json NULL`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` DROP COLUMN \`nameAr\``);
    // await queryRunner.query(`ALTER TABLE \`Branch\` ADD \`nameAr\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` DROP COLUMN \`nameEn\``);
    // await queryRunner.query(`ALTER TABLE \`Branch\` ADD \`nameEn\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`updatedAt\` \`updatedAt\` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` DROP COLUMN \`location\``);
    // await queryRunner.query(`ALTER TABLE \`Branch\` ADD \`location\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` DROP COLUMN \`address\``);
    // await queryRunner.query(`ALTER TABLE \`Branch\` ADD \`address\` text COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`isDeleted\` \`isDeleted\` tinyint NULL DEFAULT '0'`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`hasPickup\` \`hasPickup\` tinyint NULL DEFAULT '0'`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`branch_createdAt\` \`branch_createdAt\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` DROP COLUMN \`managerPhoneNumber\``);
    // await queryRunner.query(`ALTER TABLE \`Branch\` ADD \`managerPhoneNumber\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` DROP COLUMN \`managerName\``);
    // await queryRunner.query(`ALTER TABLE \`Branch\` ADD \`managerName\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` DROP COLUMN \`district_ar\``);
    // await queryRunner.query(`ALTER TABLE \`Branch\` ADD \`district_ar\` varchar(45) COLLATE "utf8mb4_unicode_ci" NOT NULL DEFAULT 'الموقع'`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` DROP COLUMN \`district\``);
    // await queryRunner.query(`ALTER TABLE \`Branch\` ADD \`district\` varchar(45) COLLATE "utf8mb4_unicode_ci" NOT NULL DEFAULT 'Test'`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` DROP COLUMN \`posIdBranch_branch\``);
    // await queryRunner.query(`ALTER TABLE \`Branch\` ADD \`posIdBranch_branch\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` CHANGE \`idCity\` \`idCity\` int NOT NULL DEFAULT '1'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` DROP INDEX \`IDX_5b97b930dfffe8baad191a195f\``);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` DROP COLUMN \`createdAt\``);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`createdAt\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` CHANGE \`password\` \`password\` varchar(255) COLLATE "utf8mb4_unicode_ci" NOT NULL DEFAULT 'test'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` CHANGE \`link\` \`link\` varchar(255) COLLATE "utf8mb4_unicode_ci" NOT NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` DROP INDEX \`IDX_76d44e210594dd4ecf817eb425\``);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` DROP COLUMN \`email\``);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`email\` varchar(45) COLLATE "utf8mb4_unicode_ci" NOT NULL`);
    // await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_76d44e210594dd4ecf817eb425\` ON \`Merchant\` (\`email\`)`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` DROP COLUMN \`description_ar\``);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`description_ar\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` DROP INDEX \`IDX_9fa80fea402e21078b46abd5cd\``);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` DROP COLUMN \`name_ar\``);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`name_ar\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` DROP COLUMN \`name\``);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`name\` varchar(45) COLLATE "utf8mb4_unicode_ci" NOT NULL`);
    // await queryRunner.query(`ALTER TABLE \`Admin\` DROP COLUMN \`password\``);
    // await queryRunner.query(`ALTER TABLE \`Admin\` ADD \`password\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Admin\` DROP INDEX \`IDX_fca5840681c3854ea15e03e4a2\``);
    // await queryRunner.query(`ALTER TABLE \`Admin\` DROP COLUMN \`email\``);
    // await queryRunner.query(`ALTER TABLE \`Admin\` ADD \`email\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` DROP COLUMN \`updatedAt\``);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` DROP COLUMN \`brandKey\``);
    // await queryRunner.query(`ALTER TABLE \`Admin\` DROP COLUMN \`refreshtokenexp\``);
    // await queryRunner.query(`ALTER TABLE \`Admin\` DROP COLUMN \`refreshtoken\``);
    // await queryRunner.query(`ALTER TABLE \`Admin\` DROP COLUMN \`updatedAt\``);
    // await queryRunner.query(`ALTER TABLE \`Admin\` DROP COLUMN \`createdAt\``);
    // await queryRunner.query(`ALTER TABLE \`Admin\` DROP COLUMN \`name\``);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`visits_time_diff\` int NOT NULL DEFAULT '5'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`twitterUrl\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`token\` varchar(255) COLLATE "utf8mb4_unicode_ci" NOT NULL DEFAULT 'test'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`theme\` json NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`subscriptionStartOn\` datetime NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`subscriptionEndOn\` datetime NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`subscription_period\` int NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`snapchatUrl\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`senderID\` varchar(200) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`secret\` varchar(255) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`sdkUserNotificationUrl\` text COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`salt\` varchar(255) COLLATE "utf8mb4_unicode_ci" NOT NULL DEFAULT 'test'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`posData\` json NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`posBusinessId\` varchar(255) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`pointScaleFactor\` tinyint NULL DEFAULT '1'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`point_valid_days\` int NOT NULL DEFAULT '90'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`pickupTimes_ar\` json NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`pickupTimes\` json NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`pickupNowTime\` json NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`phoneNumber\` varchar(14) COLLATE "utf8mb4_unicode_ci" NOT NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`personalPhoneNumber\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`personalEmail\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`owner\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`onlineConfiguration\` json NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`onlineBillingSubscription\` tinyint NULL DEFAULT '0'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`min\` int NULL DEFAULT '0'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`merchant_trn\` varchar(255) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`max\` int NULL DEFAULT '0'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`language\` varchar(4) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`isNationalDaySubscribe\` tinyint NULL DEFAULT '0'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`isMenuIntegrated\` tinyint NULL DEFAULT '0'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`intersoftMerchantId\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`integratedPaymentMerchantId\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`instagramUrl\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`idSubscriptionPlan\` int NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`idsubscription_status\` int NULL DEFAULT '1'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`idSubscription\` int NOT NULL DEFAULT '1'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`idStatus\` int NOT NULL DEFAULT '1'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`idOnlineLoyaltyType\` int NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`idLoyaltyType\` tinyint NOT NULL DEFAULT '2'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`idEcommerceType\` int NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`idActiveLoyality\` varchar(50) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`hasPickup\` tinyint NULL DEFAULT '0'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`hasCustomCampaign\` tinyint NULL DEFAULT '0'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`FCMToken\` text COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`facebookUrl\` varchar(45) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`enabled_webhook_order\` tinyint NOT NULL DEFAULT '1'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`enabled_first_SMS\` tinyint NOT NULL DEFAULT '1'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`dashboardData\` json NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`cr_number\` varchar(255) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`cr_name\` varchar(255) COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`coverImageURL\` text COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`bussiness_address\` text COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`baseVisit\` int NOT NULL DEFAULT '7'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`avg\` int NULL DEFAULT '0'`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`AppSid\` text COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD \`access_token\` text COLLATE "utf8mb4_unicode_ci" NULL`);
    // await queryRunner.query(`ALTER TABLE \`Admin\` ADD \`token\` varchar(255) COLLATE "utf8mb4_unicode_ci" NOT NULL`);
    // await queryRunner.query(`CREATE INDEX \`idMerchantFK_Branch_idx\` ON \`Branch\` (\`idMerchant\`)`);
    // await queryRunner.query(`CREATE INDEX \`idCityFK_Branch_idx\` ON \`Branch\` (\`idCity\`)`);
    // await queryRunner.query(`CREATE UNIQUE INDEX \`personalEmail_UNIQUE\` ON \`Merchant\` (\`personalEmail\`)`);
    // await queryRunner.query(`CREATE UNIQUE INDEX \`peronalPhoneNumber_UNIQUE\` ON \`Merchant\` (\`personalPhoneNumber\`)`);
    // await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_ce88f5788990d08fc957067b3f\` ON \`Merchant\` (\`token\`)`);
    // await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_41b49d9b493397054f3f09ffa9\` ON \`Merchant\` (\`phoneNumber\`)`);
    // await queryRunner.query(`CREATE INDEX \`idSubscriptionFK_Merchant_idx\` ON \`Merchant\` (\`idSubscription\`)`);
    // await queryRunner.query(`CREATE INDEX \`idsubscription_status\` ON \`Merchant\` (\`idsubscription_status\`)`);
    // await queryRunner.query(`CREATE INDEX \`idStatusFK_MerchantStatus_idx\` ON \`Merchant\` (\`idStatus\`)`);
    // await queryRunner.query(`CREATE INDEX \`idPosFK_Merchant_idx\` ON \`Merchant\` (\`idPos\`)`);
    // await queryRunner.query(`CREATE INDEX \`idOnlineLoyaltyType_Merchant_idx\` ON \`Merchant\` (\`idOnlineLoyaltyType\`)`);
    // await queryRunner.query(`CREATE INDEX \`idEcommerceType_Merchant_idx\` ON \`Merchant\` (\`idEcommerceType\`)`);
    // await queryRunner.query(`CREATE INDEX \`idActiveLoyalityFK_Merchant_idx\` ON \`Merchant\` (\`idActiveLoyality\`)`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` ADD CONSTRAINT \`FK_88c09574ef9d994db6f868c6eed\` FOREIGN KEY (\`idCity\`) REFERENCES \`City\`(\`idCity\`) ON DELETE NO ACTION ON UPDATE CASCADE`);
    // await queryRunner.query(`ALTER TABLE \`Branch\` ADD CONSTRAINT \`FK_037082289c0af64352233ba5c70\` FOREIGN KEY (\`idMerchant\`) REFERENCES \`Merchant\`(\`idMerchant\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD CONSTRAINT \`Merchant_ibfk_2\` FOREIGN KEY (\`idSubscriptionPlan\`) REFERENCES \`SubscriptionPlan\`(\`idSubscriptionPlan\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD CONSTRAINT \`Merchant_ibfk_1\` FOREIGN KEY (\`idsubscription_status\`) REFERENCES \`subscription_status\`(\`idsubscription_status\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD CONSTRAINT \`FK_96665cd89bf5bbabc24e227b5b4\` FOREIGN KEY (\`idOnlineLoyaltyType\`) REFERENCES \`OnlineLoyaltyType\`(\`idOnlineLoyaltyType\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD CONSTRAINT \`FK_8b202431f0c8c76856dc7d144d9\` FOREIGN KEY (\`idSubscription\`) REFERENCES \`Subscription\`(\`idSubscription\`) ON DELETE NO ACTION ON UPDATE CASCADE`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD CONSTRAINT \`FK_618a91852ef8a042edf65be90fc\` FOREIGN KEY (\`idEcommerceType\`) REFERENCES \`EcommerceType\`(\`idEcommerceType\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD CONSTRAINT \`FK_6040a287d03f40eb0cd2d6f6e7e\` FOREIGN KEY (\`idActiveLoyality\`) REFERENCES \`Campaign\`(\`idCampaign\`) ON DELETE SET NULL ON UPDATE CASCADE`);
    // await queryRunner.query(`ALTER TABLE \`Merchant\` ADD CONSTRAINT \`FK_5b97b930dfffe8baad191a195f2\` FOREIGN KEY (\`idPos\`) REFERENCES \`POS\`(\`idPOS\`) ON DELETE NO ACTION ON UPDATE CASCADE`);
  }
}
