class CreatePackageServices < ActiveRecord::Migration[8.1]
  def change
    create_table :package_services do |t|
      t.references :package, null: false, foreign_key: true
      t.references :service, null: false, foreign_key: true
      t.integer :position, null: false, default: 0

      t.timestamps
    end

    add_index :package_services, [ :package_id, :service_id ], unique: true
  end
end
