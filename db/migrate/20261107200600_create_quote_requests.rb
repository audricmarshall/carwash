class CreateQuoteRequests < ActiveRecord::Migration[8.1]
  def change
    create_table :quote_requests do |t|
      t.string :company, null: false
      t.string :name, null: false
      t.string :email, null: false
      t.string :phone, null: false
      t.string :city
      t.integer :fleet_size
      t.text :message
      t.boolean :consent, null: false, default: false
      t.datetime :consent_at
      t.integer :status, null: false, default: 0

      t.timestamps
    end

    add_index :quote_requests, :status
    add_index :quote_requests, :created_at
  end
end
