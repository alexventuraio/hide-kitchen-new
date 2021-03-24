class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.float :price
      t.boolean :customizable
      t.boolean :active
      t.integer :position

      t.timestamps
    end
  end
end
