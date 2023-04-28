class PairsController < ApplicationController
    skip_before_action :verify_authenticity_token
    skip_before_action :authorize_request, only: [:index, :destroy, :destroy_all,  :randomize_pairs, :pair_students]
 
    
    def index
      @pairs = Pair.select('pairs.*, s1.fullname AS student1_name, s2.fullname AS student2_name')
                   .joins('INNER JOIN students s1 ON pairs.student1_id = CAST(s1.id AS text)')
                   .joins('INNER JOIN students s2 ON pairs.student2_id = CAST(s2.id AS text)')
                   .order(created_at: :desc)
    
      # render json: @pairs.as_json(only: [:id, :student1_name, :student2_name, :created_at])

      render json: @pairs.as_json(only: [:id, :student1_name, :student2_name, :week_no, :created_at])

def week_no
  created_at.strftime('%U')
end

    end
    
    
    def new
      @pair = Pair.new
    end
  
    def create
      @pair = Pair.new(pair_params)
    
      if @pair.save
        head :no_content
      else
        render json: { errors: @pair.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
  
  
    def edit
      @pair = Pair.find(params[:id])
    end
  
    def update
      @pair = Pair.find(params[:id])
      if @pair.update(pair_params)
        redirect_to pairs_path
      else
        render :edit
      end
    end
    #delete one pair
    def destroy
      @pair = Pair.find(params[:id])
      puts "Deleting pair with ID: #{params[:id]}"
      puts "Pair record before deletion: #{@pair}"
      
      if @pair.destroy
        puts "Pair record successfully deleted"
        render json: { message: "Pair was successfully deleted." }, status: :ok
      else
        puts "Error deleting pair record"
        render json: { errors: "Failed to delete pair." }, status: :unprocessable_entity
      end
    end
    
    
    
    
  
    def pair_students
      # Get the latest pair records created in the current week
      latest_pairs = Pair.where(week_no: Date.today.cweek)
  
      # Check if a week has passed since the latest pairs were created
      if latest_pairs.empty? || latest_pairs.first.created_at < 1.week.ago
        # Get all the students
        students = Student.all
  
        # Shuffle the students randomly
        shuffled_students = students.shuffle
  
        # Divide the shuffled students into pairs
        pairs = shuffled_students.each_slice(2).to_a
  
        # Create new pair records in the database
        pairs.each do |pair|
          Pair.create(
            week_no: Date.today.cweek,
            student1_id: pair[0].id,
            student2_id: pair[1].id,
            student1_user_id: pair[0].user.id,
            student2_user_id: pair[1].user.id
          )
        end
  
        # Redirect to the pairs index page
        redirect_to pairs_path
      else
        # Redirect to the pairs index page with a notice message
        redirect_to pairs_path, notice: "Pairs were already created this week."
      end
    end


    def randomize_pairs
      # Get the latest pair records created in the current week
      latest_pairs = Pair.where(week_no: Date.today.cweek)
    
      # Check if there are pairs for the current week
      if latest_pairs.any?
        # Get the shuffled students from the latest pairs
        shuffled_students = latest_pairs.flat_map { |pair| [pair.student1, pair.student2] }.shuffle
      
        # Divide the shuffled students into pairs
        new_pairs = shuffled_students.each_slice(2).to_a
      
        # Update the existing pair records in the database
        latest_pairs.each_with_index do |pair, index|
          pair.update(
            student1_id: new_pairs[index][0].id,
            student2_id: new_pairs[index][1].id,
            student1_user_id: new_pairs[index][0].id,
            student2_user_id: new_pairs[index][1].id,
          )
        end
          
        # Redirect to the pairs index page with a success message
        redirect_to pairs_path, notice: "Pairs have been randomized."
      else
        # Redirect to the pairs index page with an error message
        redirect_to pairs_path, alert: "There are no pairs for the current week."
      end
    end
    


    def destroy_all
      if Pair.destroy_all
        redirect_to pairs_path, notice: "All pairs were successfully deleted."
      else
        redirect_to pairs_path, alert: "Failed to delete all pairs."
      end
    end
    
    
  
    private
  
    def pair_params
      params.require(:pair).permit(:week_no, :student1_id, :student2_id, :student1_user_id, :student2_user_id)
    end
  end
  