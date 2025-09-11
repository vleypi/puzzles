export const Tool = ({ children, className = '', hover = false, title = '', description = '', color = '', ...props }) => {
    return (
      <div 
        className={`text-card-foreground flex flex-col gap-6 py-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border-0 bg-white rounded-2xl overflow-hidden shadow-sm ${className}`} 
        {...props}
      >
        <div data-slot="card" className="p-6 text-center">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br text-white shadow-lg  flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${color}`}>
                {children}
            </div>
            <h3 className="font-semibold text-sm text-slate-800 mb-1 group-hover:text-blue-600 transition-colors duration-200">{title}</h3>
            <p className="text-xs text-slate-600">{description}</p>
        </div>
      </div>
    )
  }

