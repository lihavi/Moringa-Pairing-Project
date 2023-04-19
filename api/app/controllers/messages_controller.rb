class MessagesController < ApplicationController
    # GET /messages
    def index
        messages = Admin.all
        render json: messages
    end
    
    # GET /messages/:id
    def show
        messages = Admin.find(params[:id])
        render json: messages
    end
    
    # POST /message/:id
    def create
        message = Admin.new(message_params)
    
        if message.save
            render json: message, status: :created
        else
            render json: message.errors, status: :unprocessable_entity
        end
    end
    
    # PATCH/PUT /message/:id
    def update
        message = Admin.find(params[:id])
    
        if message.update(message_params)
            render json: message, status: :ok
        else
            render json: message.errors, status: :unprocessable_entity
        end
    end
    
    # DELETE /message/:id
    def destroy
        message = Admin.find(params[:id])
        message.destroy
        head :no_content
    end
    
    private
    
    def message_params
        params.require(:message).permit(:sender_user_id, :recipient_user_id, :content, :pair_id)
    end
end
