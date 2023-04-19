class Student < ApplicationRecord
  belongs_to :user
  has_many :pairs


  #validations
  validates :fullname, presence: true
  validates :grade, presence: true

end
