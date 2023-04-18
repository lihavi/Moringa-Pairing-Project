# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# user = User.new(email: 'example@example.com', password: 'password', role: 'admin')


# User.create!(
#   [
#     { fullname: "John Smith", email: "john.smith@example.com", password: "password123", role: "admin" },
#     { fullname: "Jane Doe", email: "jane.doe@example.com", password: "password456", role: "student" },
#     { fullname: "Mark Johnson", email: "mark.johnson@example.com", password: "password789", role: "admin" },
#     { fullname: "Alice Williams", email: "alice.williams@example.com", password: "password123", role: "student" },
#     { fullname: "Bob Brown", email: "bob.brown@example.com", password: "password456", role: "student" }
#   ]
# )


Student.create!(
  fullname: "John Doe",
  grade: 85,
  user_id: 2
)

Student.create!(
  fullname: "Jane Smith",
  grade: 92,
  user_id: 4
)

Student.create!(
  fullname: "Mark Johnson",
  grade: 78,
  user_id: 5
)
