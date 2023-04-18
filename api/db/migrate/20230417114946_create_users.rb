class CreatePairs < ActiveRecord::Migration[7.0]
  def change
    create_table :pairs, id: false do |t|
      t.integer :my_custom_id, primary_key: true
      t.integer :week_no
      t.integer :student1_id
      t.integer :student2_id
      t.integer :student1_user_id
      t.integer :student2_user_id

      t.timestamps
    end
  end
end
