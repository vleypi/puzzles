

export const Activity = () => {
    return (

        <div className="bg-card text-card-foreground flex flex-col gap-6 border py-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div className="leading-none font-semibold flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-5 h-5 text-muted-foreground">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Недавняя активность</span>
                </div>
            </div>
            <div className="px-6 space-y-3">
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition-all duration-200 cursor-pointer group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20 text-primary shadow-sm group-hover:scale-105 transition-transform duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-5 h-5">
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">Завершили изучение набора</p>
                    <p className="text-sm text-muted-foreground">Английские неправильные глаголы</p>
                    <p className="text-xs text-muted-foreground/80">2 часа назад</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition-all duration-200 cursor-pointer group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-accent/10 to-accent/20 text-accent shadow-sm group-hover:scale-105 transition-transform duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy w-5 h-5">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                      <path d="M4 22h16"></path>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">Получили достижение</p>
                    <p className="text-sm text-muted-foreground">Изучено 100 карточек подряд</p>
                    <p className="text-xs text-muted-foreground/80">1 день назад</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition-all duration-200 cursor-pointer group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-chart-5/10 to-chart-5/20 text-chart-5 shadow-sm group-hover:scale-105 transition-transform duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-5 h-5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">Достигли цели</p>
                    <p className="text-sm text-muted-foreground">Изучение 30 минут в день</p>
                    <p className="text-xs text-muted-foreground/80">2 дня назад</p>
                  </div>
                </div>
              </div>
        </div>
    )
}