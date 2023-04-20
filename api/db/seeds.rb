require 'faker'

# Create 10 users
10.times do
  User.create(
    email: Faker::Internet.email,
    password: Faker::Internet.password
  )
end


User.create!(
  [
    { fullname: "John Smith", email: "john.smith@example.com", password: "password123", role: "admin" },
    { fullname: "Jane Doe", email: "jane.doe@example.com", password: "password456", role: "student" },
    { fullname: "Mark Johnson", email: "mark.johnson@example.com", password: "password789", role: "admin" },
    { fullname: "Alice Williams", email: "alice.williams@example.com", password: "password123", role: "student" },
    { fullname: "Bob Brown", email: "bob.brown@example.com", password: "password456", role: "student" }
  ]
)


# Student.create!(
#   fullname: "John Doe",
#   grade: 85,
#   user_id: 2
# )

# Student.create!(
#   fullname: "Jane Smith",
#   grade: 92,
#   user_id: 4
# )

# Student.create!(
#   fullname: "Mark Johnson",
#   grade: 78,
#   user_id: 5
# )
require 'faker'

# Create 10 users
10.times do
  User.create(
    email: Faker::Internet.email,
    password: Faker::Internet.password
  )
end


# Create 50 students, each associated with a random user
50.times do
  Student.create(
    fullname: Faker::Name.name,
    grade: Faker::Number.between(from: 0.0, to: 10.0),
    user: User.order("RANDOM()").first
  )
end
