export const Card = ({ children, className = '', hover = false, ...props }) => {
    return (
      <div 
        className={`bg-white rounded-xl shadow-sm border border-gray-100 p-5 ${
          hover ? 'hover:shadow-md transition-shadow cursor-pointer' : ''
        } ${className}`} 
        {...props}
      >
        {children}
      </div>
    )
  }