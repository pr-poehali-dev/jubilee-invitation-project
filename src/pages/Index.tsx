import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gatsby-black via-gatsby-dark to-gatsby-black text-gatsby-cream">
      
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, currentColor 50px, currentColor 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, currentColor 50px, currentColor 51px)`
        }}></div>
      </div>

      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gatsby-gold to-transparent opacity-60"></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-gatsby-gold"></div>
            <Icon name="PartyPopper" className="text-gatsby-gold" size={32} />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-gatsby-gold"></div>
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-bold text-gatsby-gold tracking-wide">
            Юбилей
          </h1>
          
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="h-px bg-gatsby-gold/30 mx-auto w-3/4"></div>
            <p className="text-xl md:text-2xl leading-relaxed text-gatsby-cream/90">
              С радостью приглашаю вас отпраздновать мой юбилей
            </p>
            <div className="h-px bg-gatsby-gold/30 mx-auto w-3/4"></div>
          </div>

          <div className="flex justify-center items-center gap-2 mt-12">
            <div className="w-3 h-3 border-2 border-gatsby-gold rotate-45"></div>
            <div className="w-2 h-2 bg-gatsby-gold"></div>
            <div className="w-3 h-3 border-2 border-gatsby-gold rotate-45"></div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gatsby-gold/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gatsby-gold rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gatsby-gold"></div>
              <Icon name="Sparkles" className="text-gatsby-gold" size={24} />
              <div className="h-px w-16 bg-gatsby-gold"></div>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-gatsby-gold mb-4">Программа вечера</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Music', title: 'Живая музыка', desc: 'Джазовый оркестр и танцевальные композиции' },
              { icon: 'Users', title: 'Танцы', desc: 'Танцпол открыт всю ночь напролёт' },
              { icon: 'PartyPopper', title: 'Сюрпризы', desc: 'Изысканные угощения и много незабываемых моментов' }
            ].map((item, i) => (
              <Card 
                key={i}
                className="relative bg-gatsby-dark/50 border-2 border-gatsby-gold/20 p-8 hover:border-gatsby-gold/60 transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gatsby-gold/5 rounded-full blur-3xl group-hover:bg-gatsby-gold/10 transition-all"></div>
                <div className="relative z-10">
                  <div className="mb-6 inline-block p-4 bg-gatsby-gold/10 rounded-lg">
                    <Icon name={item.icon} className="text-gatsby-gold" size={32} />
                  </div>
                  <h3 className="font-display text-2xl text-gatsby-gold mb-3">{item.title}</h3>
                  <p className="text-gatsby-cream/70 leading-relaxed">{item.desc}</p>
                  
                  <div className="absolute bottom-4 right-4 flex gap-1">
                    <div className="w-1 h-4 bg-gatsby-gold/30"></div>
                    <div className="w-1 h-3 bg-gatsby-gold/20"></div>
                    <div className="w-1 h-2 bg-gatsby-gold/10"></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 bg-gradient-to-b from-transparent via-gatsby-emerald/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            <Card className="bg-gatsby-dark/60 border-2 border-gatsby-gold/30 p-10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="MapPin" className="text-gatsby-gold" size={28} />
                <h3 className="font-display text-3xl text-gatsby-gold">Место</h3>
              </div>
              <div className="h-px bg-gatsby-gold/20 mb-6"></div>
              <p className="text-xl text-gatsby-cream/90 leading-relaxed">
                Банкетный зал<br/>
                <span className="font-display text-2xl text-gatsby-gold">«Буа Алан»</span>
              </p>
            </Card>

            <Card className="bg-gatsby-dark/60 border-2 border-gatsby-gold/30 p-10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Sparkles" className="text-gatsby-gold" size={28} />
                <h3 className="font-display text-3xl text-gatsby-gold">Дресс-код</h3>
              </div>
              <div className="h-px bg-gatsby-gold/20 mb-6"></div>
              <div className="space-y-4 text-gatsby-cream/90">
                <div>
                  <p className="font-display text-lg text-gatsby-gold mb-2">Мужчины</p>
                  <p className="text-sm leading-relaxed">Подтяжки и бабочки. Шляпы тоже приветствуются</p>
                </div>
                <div>
                  <p className="font-display text-lg text-gatsby-gold mb-2">Женщины</p>
                  <p className="text-sm leading-relaxed">Платье, боа и улыбка</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto mt-16 space-y-6 text-center">
            <div className="flex justify-center items-center gap-3 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-gatsby-gold"></div>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-gatsby-gold rotate-45"></div>
                <div className="w-3 h-3 border-2 border-gatsby-gold rotate-45"></div>
                <div className="w-2 h-2 bg-gatsby-gold rotate-45"></div>
              </div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-gatsby-gold"></div>
            </div>
            
            <p className="text-gatsby-cream/80 text-lg leading-relaxed px-4">
              Погрузитесь в атмосферу 1920-х годов, когда стиль и элегантность были на пике моды. 
              Одевайтесь в лучшие наряды, ведь вечер обещает быть незабываемым!
            </p>
            
            <p className="text-gatsby-gold/90 font-display text-xl leading-relaxed px-4">
              Давайте вместе отпразднуем эту важную веху и создадим воспоминания, 
              которые останутся с нами навсегда!
            </p>
          </div>
        </div>
      </section>

      <footer className="relative py-12 text-center text-gatsby-cream/40 text-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-gatsby-gold/40 to-transparent"></div>
        <p className="mt-8">С нетерпением жду встречи</p>
      </footer>
    </div>
  );
};

export default Index;