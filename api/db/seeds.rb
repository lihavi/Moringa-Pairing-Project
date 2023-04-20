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

# require 'faker'

# puts "Deleting existing data..."
# Pair.destroy_all
# Student.destroy_all
# User.destroy_all
# Instructor.destroy_all
# Feedback.destroy_all
# Message.destroy_all

# puts "Creating new data..."
# # Create 10 users with random roles (either 'student' or 'instructor')
# 10.times do
#   role = ['student', 'admin'].sample
#   User.create(
#     fullname: Faker::Name.name,
#     email: Faker::Internet.email,
#     password: 'password',
#     role: role
#   )
# end

# # Create 5 instructors, each associated with a user
# 5.times do
#   user = User.where(role: 'instructor').sample
#   Instructor.create(
#     user_id: user.id,
#     name: user.full_name,
#     email: user.email
#   )
# end

# # Create 10 random pairs for week 1
# students = Student.all.sample(10)
# pairs = students.each_slice(2).to_a
# pairs << [students.last, Student.all.sample]
# pairs.each do |pair|
#   Pair.create(
#     week_no: 1,
#     student1_id: pair[0].id,
#     student2_id: pair[1].id
#   )
# end

# # Generate feedback for each pair
# Pair.all.each do |pair|
#   Feedback.create(
#     user_id: pair.student1.user_id,
#     instructor_id: Instructor.all.sample.user_id,
#     comment: Faker::Lorem.paragraph
#   )
#   Feedback.create(
#     user_id: pair.student2.user_id,
#     instructor_id: Instructor.all.sample.user_id,
#     comment: Faker::Lorem.paragraph
#   )
# end

# # Generate some messaging data
# User.all.each do |user|
#   # Send a message to a random recipient
#   Messaging.create(
#     sender_user_id: user.id,
#     recipient_user_id: User.where.not(id: user.id).sample.id,
#     content: Faker::Lorem.paragraph
#   )
# end

# puts "New data created!"