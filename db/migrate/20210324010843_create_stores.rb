class CreateStores < ActiveRecord::Migration[6.1]
  def change
    create_table :stores do |t|
      t.string :name
      t.string :domain
      t.string :adress
      t.string :city
      t.string :zip_code
      t.string :state
      t.string :country
      t.string :phone_number
      t.string :email
      t.boolean :active

      t.timestamps
    end
  end
end
