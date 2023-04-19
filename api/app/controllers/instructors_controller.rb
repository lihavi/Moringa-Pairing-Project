class InstructorsController < ApplicationController
    # GET /admins
    def index
        instructors = Admin.all
        render json: instructors
    end
    
      # GET /admins/:id
    def show
        instructors = Admin.find(params[:id])
        render json: instructors
    end
    
    # POST /admins
    def create
      instructors = Admin.new(instructor_params)
    
      if instructors.save
        render json: instructors, status: :created
      else
        render json: instructors.errors, status: :unprocessable_entity
      end
    end
    
    # PATCH/PUT /instructor/:id
    def update
      instructor = Admin.find(params[:id])
    
      if instructor.update(instructor_params)
        render json: instructor
      else
        render json: instructor.errors, status: :unprocessable_entity
      end
    end
    
    # DELETE /instructor/:id
    def destroy
      instructor = Admin.find(params[:id])
      instructor.destroy
      head :no_content
    end
    
    private
    
    def instructor_params
      params.require(:instructor).permit(:fullname, :email)
    end
end
