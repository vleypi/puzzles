import { Card } from '@/components/ui/Card'


const cards = [
    {id: 1, title: 'Английские неправильные глаголы', description: 'Основные неправильные глаголы английского языка', quantity: 45, date: new Date().getTime(), progress: 78, complexity: 'Средний'},
    {id: 2,title: 'История России: XIX век', description: 'Ключевые события и даты XIX века', quantity: 32, date: new Date().getTime(), progress: 45, complexity: 'Сложный'},
    {id: 3,title: 'История России: XIX век', description: 'Ключевые события и даты XIX века', quantity: 32, date: new Date().getTime(), progress: 45, complexity: 'Сложный'}
]

export const Sets = () => {
    return (
        <div className="lg:col-span-2 space-y-6">
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-foreground">Мои наборы</h2>
                    <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5 rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 bg-transparent"
                    >
                    Посмотреть все
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                {cards.map((card)=>
                    <Card key={card.id} title={card.title} description={card.description} quantity={card.quantity} progress={card.progress} date={card.date} complexity={card.complexity}/>
                )}
            </div>
        </div>
    )
}