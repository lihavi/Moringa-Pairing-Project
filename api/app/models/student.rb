class Student < ApplicationRecord
  belongs_to :user
  has_many :pairs


  #validations
  validates :fullname, presence: true
  validates :grade, presence: true

  # # Define a method to generate pairs of students
  # def self.generate_pairs
  #   # Get and reshuffle students from the database
  #   students = self.all.shuffle
  #   # Initialize an empty array
  #   pairs = []
  #   # Iterate over the students array two at a time
  #   students.each_slice(2) do |student1, student2|
  #     # Create a new pair object and add it to the pairs array
  #     pairs << Pair.create(student1: student1, student2: student2)
  #   end
  #   # Return the pairs array
  #   pairs
  # end

end
