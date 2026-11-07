class CreateServices < ActiveRecord::Migration[8.1]
  def change
    create_table :services do |t|
      t.string :name, null: false
      t.string :slug, null: false
      t.text :description
      t.integer :category, null: false, default: 0
      t.integer :position, null: false, default: 0
      t.boolean :active, null: false, default: true

      t.timestamps
    end

    add_index :services, :slug, unique: true
    add_index :services, :name, unique: true
  end
end
