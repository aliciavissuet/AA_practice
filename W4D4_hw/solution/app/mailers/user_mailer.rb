class UserMailer < ApplicationMailer
    default from: 'everybody@app_academy.io'
    def welcome_email(user)
        @user = user
        mail to:(@user.username, subject: 'Welcome to the NEW 99 cats!')
    end
end
