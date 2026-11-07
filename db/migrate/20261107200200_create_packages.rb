class CreatePackages < ActiveRecord::Migration[8.1]
  def change
    create_table :packages do |t|
      t.string :name, null: false
      t.string :slug, null: false
      t.string :tagline
      t.text :description
      t.integer :price_cents, null: false
      t.boolean :price_from, null: false, default: true
      t.integer :duration_minutes
      t.integer :position, null: false, default: 0
      t.boolean :featured, null: false, default: false
      t.boolean :active, null: false, default: true

      t.timestamps
    end

    add_index :packages, :slug, unique: true
    add_index :packages, :name, unique: true
  end
end
