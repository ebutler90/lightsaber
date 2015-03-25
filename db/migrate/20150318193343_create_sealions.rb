class CreateSealions < ActiveRecord::Migration
  def change
    create_table :sealions do |t|
      t.string :name, null: false
      t.string :quirk, null: false
      t.string :email, null:false
      t.timestamps null: false
    end
  end
end
