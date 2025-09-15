



export const Statistics = () => {
    return (
        <div className="space-y-6 lg:sticky lg:top-25 lg:self-start transition-all duration-300 lg:z-10">
            <div className="space-y-6">
              {/* Карточка дневной цели */}
              <div className="text-card-foreground flex flex-col gap-6 border py-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-primary/20 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
                <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
                  <div className="font-semibold flex items-center space-x-2 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-5 h-5 text-primary">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                    <span>Дневная цель</span>
                  </div>
                </div>
                <div className="px-6 space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-1">23</div>
                    <div className="text-sm text-muted-foreground">из 30 минут</div>
                  </div>
                  <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full h-3 bg-muted/50">
                    <div data-state="indeterminate" data-max="100" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: 'translateX(-24%)' }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">Осталось 7 минут до достижения цели!</p>
                </div>
              </div>

              {/* Карточка серии дней */}
              <div className="text-card-foreground flex flex-col gap-6 border py-6 bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 border-accent/20 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
                <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
                  <div className="font-semibold flex items-center space-x-2 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame w-5 h-5 text-accent">
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                    </svg>
                    <span>Серия дней</span>
                  </div>
                </div>
                <div className="px-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">12</div>
                  <p className="text-sm text-muted-foreground">дней подряд изучения</p>
                </div>
              </div>

              {/* Карточка этой недели */}
              <div className="bg-card text-card-foreground flex flex-col gap-6 border py-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
                  <div className="font-semibold flex items-center space-x-2 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-5 h-5 text-muted-foreground">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <span>Эта неделя</span>
                  </div>
                </div>
                <div className="px-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-slate-800">156</div>
                      <div className="text-xs text-muted-foreground">карточек изучено</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-800">4.2</div>
                      <div className="text-xs text-muted-foreground">часа в день</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Точность</span>
                      <span className="font-medium text-slate-800">87%</span>
                    </div>
                    <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full h-3 bg-muted/50">
                      <div data-state="indeterminate" data-max="100" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: 'translateX(-13%)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Карточка прогресса */}
              <div className="bg-card text-card-foreground flex flex-col gap-6 border py-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
                  <div className="font-semibold flex items-center space-x-2 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-5 h-5 text-chart-5">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    <span>Прогресс</span>
                  </div>
                </div>
                <div className="px-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Английский</span>
                      <span className="font-medium text-slate-800">78%</span>
                    </div>
                    <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full h-3 bg-muted/50">
                      <div data-state="indeterminate" data-max="100" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: 'translateX(-22%)' }}></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">История</span>
                      <span className="font-medium text-slate-800">45%</span>
                    </div>
                    <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full h-3 bg-muted/50">
                      <div data-state="indeterminate" data-max="100" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: 'translateX(-55%)' }}></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Математика</span>
                      <span className="font-medium text-slate-800">92%</span>
                    </div>
                    <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden rounded-full h-3 bg-muted/50">
                      <div data-state="indeterminate" data-max="100" className="bg-primary h-full w-full flex-1 transition-all" style={{ transform: 'translateX(-8%)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}