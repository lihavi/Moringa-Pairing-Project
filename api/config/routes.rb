Rails.application.routes.draw do
  # # For student
  # root to: 'students#dashboard', constraints: lambda { |request| request.env['warden'].user&.student? }
  resources :students, only: [:index, :show, :update, :create, :destroy]

  # user login/register
  post "/users/login", to: "authentication#login"
  post "/users/register", to: "users#create"
  get '/users/me', to: 'users#me'
#admin
  post "data/admin", to: "admin#create"
#student
  post "data/student", to: "student#create"
  # reset password
  post "reset_password", to: "users#reset_password"
  put "update_password/:reset_password_token", to: "users#update_password"
  put "reset_password/:reset_password_token", to: "users#update_password"

 # pairs
  post '/pair_students', to: 'pairs#pair_students'
  get '/pairs', to: 'pairs#index'
  get '/pairs/create', to: 'pairs#new'




 


end
 #
