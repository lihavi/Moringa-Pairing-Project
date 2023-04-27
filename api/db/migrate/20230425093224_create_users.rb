class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    unless table_exists? :users
    create_table :users do |t|
      t.string "fullname"
      t.string "email"
      t.string "password_digest"
      t.integer "role"
    

      t.timestamps
    end
  end
end
end

