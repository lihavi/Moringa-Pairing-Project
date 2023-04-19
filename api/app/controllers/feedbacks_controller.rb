class FeedbacksController < ApplicationController
    # GET /feedbacks
    def index
        feedbacks = Feedback.all
        render json: feedbacks
    end
        
    # GET /feedbacks/:id
    def show
        feedbacks = Admin.find(params[:id])
        render json: feedbacks
    end
        
    # POST /feedbacks
    def create
        feedbacks = Admin.new(feedback_params)
        
            if feedbacks.save
                render json: feedbacks, status: :created
            else
                render json: feedbacks.errors, status: :unprocessable_entity
            end
    end
        
    # PATCH/PUT /feedback/:id
    def update
        feedback = Admin.find(params[:id])
        
            if feedback.update(feedback_params)
                render json: feedback, status: :ok
            else
                render json: feedback.errors, status: :unprocessable_entity
            end
    end
        
    # DELETE /feedback/:id
    def destroy
        feedback = Admin.find(params[:id])
        feedback.destroy
        head :no_content
    end
        
    private
        
    def feedback_params
        params.require(:feedback).permit(:pair_id, :instructor_id, :comment)
    end
end
