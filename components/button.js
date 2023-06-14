const Button = ({ children, onclick, type}) => {
    return (
        <button 
        type={type ? type : "button"}
        className="text-blue-600 bg-yellow-400 rounded-md p-4 font-chivo font-bold text-sm"
        onclick={onclick}>
            {children}
        </button>
    );
}

export default Button;