Rails.application.routes.draw do
  # # For student
  # root to: 'students#dashboard', constraints: lambda { |request| request.env['warden'].user&.student? }
  resources :students, only: [:index, :show, :update, :create, :destroy]

  # user login/register
  post "/users/login", to: "authentication#login"
  post "/users/register", to: "users#create"
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
  # Feedbacks routes
  get '/feedbacks', to: 'feedbacks#index'
  post '/feedbacks', to: 'feedbacks#create'
  get '/feedbacks/:id', to: 'feedbacks#show'
  put '/feedbacks/:id', to: 'feedbacks#update'
  delete '/feedbacks/:id', to: 'feedbacks#destroy'

  # Instructors routes
  get '/instructors', to: 'instructors#index'
  post '/instructors', to: 'instructors#create'
  get '/instructors/:id', to: 'instructors#show'
  put '/instructors/:id', to: 'instructors#update'
  delete '/instructors/:id', to: 'instructors#destroy'

  # Messagings routes
  get '/messages', to: 'messages#index'
  post '/message', to: 'message#create'
  get '/message/:id', to: 'message#show'
  put '/message/:id', to: 'message#update'
  delete '/message/:id', to: 'message#destroy'

end

