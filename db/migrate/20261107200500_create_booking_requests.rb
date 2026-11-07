class CreateBookingRequests < ActiveRecord::Migration[8.1]
  def change
    create_table :booking_requests do |t|
      t.references :package, foreign_key: { on_delete: :nullify }
      t.string :name, null: false
      t.string :email, null: false
      t.string :phone, null: false
      t.string :address, null: false
      t.string :postcode, null: false
      t.string :city, null: false
      t.string :vehicle
      t.date :preferred_date
      t.integer :preferred_period, null: false, default: 3
      t.text :message
      t.boolean :consent, null: false, default: false
      t.datetime :consent_at
      t.integer :status, null: false, default: 0

      t.timestamps
    end

    add_index :booking_requests, :status
    add_index :booking_requests, :created_at
  end
end
