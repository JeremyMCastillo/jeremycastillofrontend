const Button = ({ children, onClick, type}) => {
    return (
        <button 
        type={type ? type : "button"}
        className="text-blue-600 bg-yellow-400 rounded-md p-4 font-chivo font-bold text-sm"
        onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;