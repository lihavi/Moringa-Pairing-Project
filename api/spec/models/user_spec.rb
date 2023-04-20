require 'rails_helper'

RSpec.describe User, type: :model do
  
  subject { described_class.new }

describe 'validations' do
it { should validate_presence_of(:email) }
it { should validate_uniqueness_of(:email) }
it { should validate_presence_of(:fullname) }
it { should validate_presence_of(:role) }
end

describe 'enums' do
it { should define_enum_for(:role).with_values(student: 0, admin: 1) }
end

describe '#admin?' do
context 'when user has admin role' do
it 'returns true' do
user = described_class.new(role: :admin)
expect(user.admin?).to be_truthy
end
end

context 'when user does not have admin role' do
  it 'returns false' do
    user = described_class.new(role: :student)
    expect(user.admin?).to be_falsey
  end
end

end

describe '#attributes' do
it 'returns attributes with role' do
user = described_class.new(email: 'test@example.com', fullname: 'Test User', role: :student)
expect(user.attributes).to eq({ 'email' => 'test@example.com', 'fullname' => 'Test User', 'role' => 'student' })
end
end

describe '#generate_reset_password_token' do
it 'generates reset password token and sets expiration time' do
user = described_class.new
user.generate_reset_password_token
expect(user.reset_password_token).not_to be_nil
expect(user.reset_password_token_expires_at).to be_within(1.second).of(1.hour.from_now)
end
end

describe '#reset_password_token_valid?' do
context 'when reset password token is present and not expired' do
it 'returns true' do
user = described_class.new(reset_password_token: 'token', reset_password_token_expires_at: 1.hour.from_now)
expect(user.reset_password_token_valid?).to be_truthy
end
end

context 'when reset password token is not present' do
  it 'returns false' do
    user = described_class.new(reset_password_token_expires_at: 1.hour.from_now)
    expect(user.reset_password_token_valid?).to be_falsey
  end
end

context 'when reset password token is expired' do
  it 'returns false' do
    user = described_class.new(reset_password_token: 'token', reset_password_token_expires_at: 1.hour.ago)
    expect(user.reset_password_token_valid?).to be_falsey
  end
end

end

end
