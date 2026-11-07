class CreateServiceAreas < ActiveRecord::Migration[8.1]
  def change
    create_table :service_areas do |t|
      t.string :name, null: false
      t.integer :kind, null: false, default: 0
      t.decimal :latitude, precision: 9, scale: 6, null: false
      t.decimal :longitude, precision: 9, scale: 6, null: false
      t.integer :radius_km
      t.string :address
      t.text :description
      t.integer :position, null: false, default: 0
      t.boolean :active, null: false, default: true

      t.timestamps
    end
  end
end
