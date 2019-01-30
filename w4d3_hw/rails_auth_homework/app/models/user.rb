require 'bcrypt'
class User < ApplicationRecord

    attr_reader :password

    before_validation :ensure_session_token
    validates :username, :session_token, presence: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true, 
                message: 'password can\'t be blank'}

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def ensure_session_token
        self.session_token = User.generate_session_token unless self.session_token
        
    end

    def self.find_by_credentials(un, pw)
        user = User.find_by(username: un, password_digest: pw)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end

   
    

end
