import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class CreateForeignFields1626992572820 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'leads',
      new TableForeignKey({
        name: 'LeadUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'leads',
      new TableForeignKey({
        name: 'LeadClient',
        columnNames: ['client_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'clients',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'leads',
      new TableForeignKey({
        name: 'LeadPlan',
        columnNames: ['plan_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'plans',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('leads', 'LeadUser');
    await queryRunner.dropForeignKey('leads', 'LeadClient');
    await queryRunner.dropForeignKey('leads', 'LeadPlan');
  }
}
