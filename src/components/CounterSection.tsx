import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, PartyPopper, Calendar, Utensils } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter = ({ end, duration = 2, suffix = '', prefix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary gold-shimmer">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const CounterSection = () => {
  const stats = [
    {
      icon: Users,
      value: 5000,
      suffix: '+',
      label: 'Happy Clients',
      color: 'text-primary',
    },
    {
      icon: PartyPopper,
      value: 1000,
      suffix: '+',
      label: 'Events Catered',
      color: 'text-secondary',
    },
    {
      icon: Calendar,
      value: 6,
      suffix: '+',
      label: 'Years of Service',
      color: 'text-primary',
    },
    {
      icon: Utensils,
      value: 10000,
      suffix: '+',
      label: 'Rotis Served',
      color: 'text-secondary',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent to-accent/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-gray-800 text-lg">
            Numbers that speak for our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4"
              >
                <stat.icon size={48} className={stat.color} />
              </motion.div>
              <div className="mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-foreground font-medium text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
