
require 'faker'

# puts Seeeddiiingg!!!!
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






